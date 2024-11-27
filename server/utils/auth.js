
const express = require('express');
const router = express.Router();
const { auth } = require('../utils/auth');
const Habit = require('../models/Habit');

// For future use when habits are finalized, this will authorize to specific users.
router.post('/habits', auth, (req, res) => {
    
});

module.exports = router;