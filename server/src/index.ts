import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dishesRouter from './routes/dishes.js';
import ordersRouter from './routes/orders.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', dishesRouter);
app.use('/api', ordersRouter);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📋 API endpoints:
  - GET  /api/categories
  - GET  /api/dishes
  - GET  /api/dishes?category=<id>
  - POST /api/orders
  - GET  /api/orders/:id
  `);
});
