import express from 'express';
import authRoutes from '../routes/auth.routes.js';

const app = express();

// ─── Middleware ───────────────────────────────────────────
app.use(express.json());

// ─── 404 Handler ──────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ─── Auth Routes ──────────────────────────────────────────
app.use('/api/auth', authRoutes);

// ─── Error Handler ────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
