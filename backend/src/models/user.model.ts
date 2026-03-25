import { pool } from '../config/db';
import { User, CreateUserDTO } from '../types/user/user.types';

export const UserModel = {
  async create(user: CreateUserDTO): Promise<User> {
    const result = await pool.query(
      `INSERT INTO users (username, email, password, role_id) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [user.username, user.email, user.password, user.role_id]
    );
    return result.rows[0];
  },

  async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0] || null;
  },

  async findById(id: number): Promise<User | null> {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0] || null;
  },

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const result = await pool.query(
      'SELECT id, username, email, role_id, created_at, updated_at FROM users ORDER BY created_at DESC'
    );
    return result.rows;
  }
};
