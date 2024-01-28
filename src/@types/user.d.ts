interface User {
  email: string;
  username: string;
  password: string;
  updatedAt: string | null;
  deletedAt: string | null;
  id: string;
  createdAt: string;
}

interface LoginResponse {
  token: string;
  tokenExpirationTime: number;
}

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps extends LoginProps {
  username: string;
}
