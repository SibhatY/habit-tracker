const express = require('express');
const router = express.Router();
const { auth } = require('../utils/auth');
const Habit = require('../models/Habit');

// POST: Create a new habit
router.post('/', auth, async (req, res) => {
    try {
        const { title, category, goal, description } = req.body;
        const newHabit = new Habit({
            user: req.user.id,
            title,
            category,
            goal,
            description
        });
        const savedHabit = await newHabit.save();
        res.status(201).json(savedHabit);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// GET: Retrieve all habits for the logged-in user
router.get('/', auth, async (req, res) => {
    try {
        const habits = await Habit.find({ user: req.user.id });
        res.json(habits);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// PUT: Update a habit's progress or completion status
router.put('/:id', auth, async (req, res) => {
    const { daysTracked, completed } = req.body;
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) return res.status(404).json({ msg: 'Habit not found' });
        if (habit.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        habit.daysTracked = daysTracked;
        habit.completed = completed;
        const updatedHabit = await habit.save();
        res.json(updatedHabit);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// DELETE: Delete a habit
router.delete('/:id', auth, async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);

        if (!habit) return res.status(404).json({ msg: 'Habit not found' });
        if (habit.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

        await habit.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Habit removed' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
