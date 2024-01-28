import { create } from "zustand";
import { AuthStore, AuthState } from "./types";
import { persist } from "zustand/middleware";

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null,
  tokenExpirationTime: null,
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      saveUser: (token, tokenExpirationTime) =>
        set({ isLoggedIn: true, token, tokenExpirationTime }),
      removeUser: () => set({ ...initialState }),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
