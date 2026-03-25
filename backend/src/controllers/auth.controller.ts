import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password, role_id } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
      }

      const result = await AuthService.register({ username, email, password, role_id });
      res.status(201).json({ success: true, data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Missing email or password' });
      }

      const result = await AuthService.login({ email, password });
      res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      res.status(401).json({ success: false, message: error.message });
    }
  },

  async getMe(req: Request, res: Response) {
    try {
      // req.user is set by authMiddleware
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authenticated' });
      }
      
      // Could fetch fresh user data from DB here using UserModel.findById(req.user.userId)
      // For now just returning the token payload
      res.status(200).json({ success: true, data: { user: req.user } });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};
