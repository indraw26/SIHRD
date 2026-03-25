import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import { RoleModel } from '../models/role.model';
import { RegisterDTO, LoginDTO, AuthResponse } from '../types/auth/auth.types';
import { GLOBAL_CONSTANTS } from '../const/global';

export class AuthService {
  static async register(data: RegisterDTO): Promise<AuthResponse> {
    // 1. Check if user already exists
    const existingUser = await UserModel.findByEmail(data.email);
    if (existingUser) {
      throw new Error('Email is already in use');
    }

    // 2. Determine role (default to "user")
    let roleId = data.role_id;
    if (!roleId) {
      const userRole = await RoleModel.findByName('user');
      if (!userRole) throw new Error('Default role "user" not found in DB');
      roleId = userRole.id;
    }

    // 3. Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password || '', saltRounds);

    // 4. Create user
    const newUser = await UserModel.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role_id: roleId,
    });

    // 5. Generate token (use default secret if env is missing during test)
    const secret = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_prod';
    const expiresIn = GLOBAL_CONSTANTS.JWT_EXPIRES_IN;
    
    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username, roleId: newUser.role_id },
      secret,
      { expiresIn } // TypeScript might complain if expiresIn is not typed right, but it accepts string
    );

    // 6. Return response without password
    const { password, ...userWithoutPassword } = newUser;
    return {
      token,
      user: userWithoutPassword
    };
  }

  static async login(data: LoginDTO): Promise<AuthResponse> {
    // 1. Find user
    const user = await UserModel.findByEmail(data.email);
    if (!user || !user.password) {
      throw new Error('Invalid email or password');
    }

    // 2. Verify password
    const isValid = await bcrypt.compare(data.password || '', user.password);
    if (!isValid) {
      throw new Error('Invalid email or password');
    }

    // 3. Generate token
    const secret = process.env.JWT_SECRET || 'fallback_secret_do_not_use_in_prod';
    const expiresIn = GLOBAL_CONSTANTS.JWT_EXPIRES_IN;

    const token = jwt.sign(
      { userId: user.id, username: user.username, roleId: user.role_id },
      secret,
      { expiresIn }
    );

    // 4. Return response
    const { password, ...userWithoutPassword } = user;
    return {
      token,
      user: userWithoutPassword
    };
  }
}
