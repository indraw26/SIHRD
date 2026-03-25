import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/auth/auth.types';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res.status(500).json({ success: false, message: 'JWT secret is not configured' });
    }

    const decoded = jwt.verify(token, secret) as JwtPayload;
    
    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
