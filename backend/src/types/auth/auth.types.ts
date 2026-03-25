import { User } from '../user/user.types';

export interface JwtPayload {
  userId: number;
  username: string;
  roleId: number;
}

export interface LoginDTO {
  email: string;
  password?: string;
}

export interface RegisterDTO {
  username: string;
  email: string;
  password?: string;
  role_id?: number;
}

export interface AuthResponse {
  token: string;
  user: Omit<User, 'password'>;
}
