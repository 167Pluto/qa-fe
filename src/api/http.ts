import axios, { AxiosError, AxiosResponse } from "axios";
import useAuthStore from "../store/authStore";

const http = axios.create({
  baseURL: import.meta.env.PLUTO_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // // This was added because Chrome caches 308 redirects
    // "Cache-Control": "no-cache",
    // Pragma: "no-cache",
  },
});

http.interceptors.request.use(
  (config) => {
    const { requireAuth = true, mediaUpload = false } = config;

    if (mediaUpload) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    if (!requireAuth) {
      return config;
    }

    const token = useAuthStore.getState().token;
    const exparationTime = useAuthStore.getState().tokenExpirationTime;

    if (!token) {
      throw new Error(
        "No token provided! This request requires authentication."
      );
    }

    if (exparationTime) {
      const now = new Date().getTime();
      if (now > exparationTime) {
        useAuthStore.getState().removeUser();
        throw new Error("Token expired! This request requires authentication.");
      }
    }

    config.headers["Authorization"] = `Bearer ${token ?? ""}`;

    return config;
  },
  (error) => console.error(error)
);

http.interceptors.response.use(
  (response) => response.data as AxiosResponse,
  (error: AxiosError<{ message?: string }>) => {
    if (error?.response?.status === 401) {
      useAuthStore.getState().removeUser();
    }

    throw error;
  }
);

export default http;
