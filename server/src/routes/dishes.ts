import { Router } from 'express';
import { categories, dishes } from '../db/schema.js';

const router = Router();

// Get all categories
router.get('/categories', (req, res) => {
    res.json(categories);
});

// Get all dishes or filter by category
router.get('/dishes', (req, res) => {
    const { category } = req.query;

    if (category && typeof category === 'string') {
        const filtered = dishes.filter((d) => d.categoryId === category);
        res.json(filtered);
    } else {
        res.json(dishes);
    }
});

// Get single dish by ID
router.get('/dishes/:id', (req, res) => {
    const dish = dishes.find((d) => d.id === req.params.id);

    if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
    }

    res.json(dish);
});

export default router;
