const express = require('express');
const authRoutes = require('./routes/authRoutes');
const confessionRoutes = require('./routes/confessionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/confessions', confessionRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
