const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    goal: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    daysTracked: [Date],
    startDate: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedOn: {
        type: Date
    }
});

module.exports = mongoose.model('Habit', HabitSchema);
