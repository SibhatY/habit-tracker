const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST request using  "/users/register"
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering new user');
    }
});

module.exports = router;
