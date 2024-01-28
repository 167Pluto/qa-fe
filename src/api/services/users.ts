import http from "../http";

export const getAllUsers = (): Promise<User[]> => http.get("/users");

export const deleteUser = (id: string): Promise<void> =>
  http.delete(`/users/${id}`);
