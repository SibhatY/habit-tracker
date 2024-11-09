import React, { useState } from "react";
import "../styles/HabitForm.css"


/**
 * This manages the form inputs for creating a new habit.
 * It has all the input fields for the habit title, goal, and category, and it handles the form submission logic
 * to add the habit to the global list of habits.
 */
const HabitForm = ({ setHabits, onClose }) => {

    // This tracks the title of the habit
    const [title, setTitle] = useState('');

    // This tracks the goal days for the habit
    const [goal, setGoal] = useState(10);

    // This tracks the category of the habit
    const [category, setCategory] = useState('Health');

    // Handles the form submission
    const submitHandling = (e) => {
        e.preventDefault();

        if (!title.trim()) {

            alert("Title of habit cannot be empty!!");
            return;
        }

        // This gets today's date as the start date
        const today = new Date().toISOString().split("T")[0]


        // Adds the new habit to the current list of habits
        setHabits(prevHabits => [
            ...prevHabits,
            { id: new Date().getTime(), title, goal, category, daysTracked: [], startDate: today, completed: false, completedOn: null, }
        ]);

        // This resets the form fields to the default values and closes the modal
        setGoal(10);
        setCategory('Health');
        onClose();
    }


    return (

        <div className="habit-form">
            <form onSubmit={submitHandling}>

                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <select value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
                    <option value={1}>1 day</option>
                    <option value={2}>2 days</option>
                    <option value={10}>10 days</option>
                    <option value={30}>30 days</option>
                    <option value={60}>60 days</option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Health">Health</option>
                    <option value="Work">Work</option>
                    <option value="Study">Study</option>
                    <option value="Personal">Personal</option>
                </select>


                <button type="submit">Add Habit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default HabitForm;