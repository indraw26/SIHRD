import { pool } from '../config/db';
import { Role } from '../types/role/role.types';

export const RoleModel = {
  async findAll(): Promise<Role[]> {
    const result = await pool.query('SELECT * FROM roles ORDER BY id ASC');
    return result.rows;
  },

  async findById(id: number): Promise<Role | null> {
    const result = await pool.query('SELECT * FROM roles WHERE id = $1', [id]);
    return result.rows[0] || null;
  },

  async findByName(name: string): Promise<Role | null> {
    const result = await pool.query('SELECT * FROM roles WHERE name = $1', [name]);
    return result.rows[0] || null;
  }
};
