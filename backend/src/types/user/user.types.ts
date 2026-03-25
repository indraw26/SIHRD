export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  role_id: number;
  created_at?: Date;
  updated_at?: Date;
}

export type CreateUserDTO = Omit<User, 'id' | 'created_at' | 'updated_at'>;
