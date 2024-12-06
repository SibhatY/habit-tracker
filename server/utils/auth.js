const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token' });
    }

    const jwtToken = token.split(' ')[1];

    try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error("JWT Verification Error:", e.message);
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = { auth };
