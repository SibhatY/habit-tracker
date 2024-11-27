const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST request using  "/users/register"
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).send('User registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering new user');
    }
});



router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        // This checks for an existing user
        const user = await User.findOne({ username });
        if (!user) {

            return res.status(400).json({msg: 'User does not exist' });
        }

        const isMatching = await bcrypt.compare(password, user.password);
        if (!isMatching) {
            return res.status(400).json({msg: 'Invalid password' });
        }

        const token = jwt.sign({id: user._id }, process.env.JWT_SECRET, {
            expiresIn: 3600
        });

        res.json({
            token,
            user: {
                id: user._id,
                username: user.username
            }
        });
    } catch (error) {

        console.error(error.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
