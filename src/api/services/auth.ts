import http from "../http";

const requireAuth = false;

export const login = (loginData: LoginProps): Promise<LoginResponse> =>
  http.post("/auth/login", loginData, { requireAuth });

export const register = (registerData: RegisterProps): Promise<void> =>
  http.post("/users", registerData, { requireAuth });
