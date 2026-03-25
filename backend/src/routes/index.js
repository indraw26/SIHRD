const { Router } = require('express');
const env = require('../config/env');

const router = Router();

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ========================
// Register feature routes here
// Example:
// const userRoutes = require('./userRoutes');
// router.use('/users', userRoutes);
// ========================

module.exports = router;
