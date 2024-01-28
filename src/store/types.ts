export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  tokenExpirationTime: number | null;
}

export interface AuthStore extends AuthState {
  saveUser: (token: string, tokenExpirationTime: number) => void;
  removeUser: () => void;
}
