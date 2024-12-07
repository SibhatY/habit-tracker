
const connectDB = require('./db');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const habitsRoutes = require('./routes/habits');

require('dotenv').config();

const app = express();

connectDB();


app.use(cors());
app.use(express.json()); // For JSON data
app.use('/users', userRoutes);
app.use('/habits', habitsRoutes);

// Testing
app.get('/', (req, res) =>
    res.send('API Running'));

// Using port 5001 since 5000 is occupied
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
