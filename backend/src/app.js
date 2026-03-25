const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const env = require('./config/env');
const routes = require('./routes');

const app = express();

// ========================
// Middlewares
// ========================
app.use(helmet());
app.use(cors());
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================
// Static Files (public/)
// ========================
app.use(express.static(path.join(__dirname, '..', 'public')));

// ========================
// API Routes
// ========================
app.use('/api', routes);

// ========================
// 404 Handler
// ========================
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ========================
// Global Error Handler
// ========================
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

module.exports = app;
