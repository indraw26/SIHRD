import { Router } from 'express';
// Need to require/import the controller since it's TS
import { AuthController } from '../controllers/auth.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

// Wrap async handlers to catch errors and pass to Express error handler
// Though standard Express 5 does this automatically, Express 4 needs it or try-catch in controller (which we have)
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/me', requireAuth, AuthController.getMe);

export default router;
