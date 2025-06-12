const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItems');

// GET today's menu
router.get('/today', async (req, res) => {
  try {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const todayName = days[today.getDay()]; 

    const foods = await FoodItem.find({ availableDay: todayName });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch food items' });
  }
});

// Add new food item
router.post('/', async (req, res) => {
  try {
    const food = new FoodItem(req.body);
    await food.save();
    res.status(201).json({ message: 'Food item added', food });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add food item', error: error.message });
  }
});

module.exports = router;

