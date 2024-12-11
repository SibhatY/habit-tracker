import React, { useState, useEffect } from "react";
import "../styles/HabitForm.css"
import predefinedHabits from '../data/predefinedHabits';


/**
 * This manages the form inputs for creating a new habit.
 * It has all the input fields for the habit title, goal, and category, and it handles the form submission logic
 * to add the habit to the global list of habits.
 */
const HabitForm = ({ setHabits, onClose }) => {

    const [selectedHabitId, setSelectedHabitId] = useState(predefinedHabits[0].id);

    const [selectedHabit, setSelectedHabit] = useState(predefinedHabits[0]);

    useEffect(() => {

        setSelectedHabit(predefinedHabits.find(habit => habit.id === selectedHabitId));
    }, [selectedHabitId]);



    // Handles the form submission
    const submitHandling = (e) => {
        e.preventDefault();


        // This gets today's date as the start date
        const today = new Date().toISOString().split("T")[0]


        // Adds the new habit to the current list of habits
        setHabits(prevHabits => [
            ...prevHabits,
            {
                ...selectedHabit,
                id: new Date().getTime(),
                daysTracked: [],
                startDate: today,
                completed: false,
                completedOn: null,
            }
        ]);

        onClose();
    }


    return (

        <div className="habit-form">
            <h2 className="form-title">Add a Habit</h2>
            <form onSubmit={submitHandling}>

                <select value={selectedHabitId} onChange={(e) => setSelectedHabitId(Number(e.target.value))}>
                    {predefinedHabits.map(habit => (
                        <option key={habit.id} value={habit.id}>
                            {habit.title} - {habit.category}
                        </option>
                    ))}
                </select>

                <div className="habit-details">
                    <p><strong>Goal:</strong> Complete {selectedHabit.goal} times</p>
                    <p><strong>Category:</strong> {selectedHabit.category}</p>
                    <p>{selectedHabit.description}</p>
                </div>

                <button type="submit">Add Habit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default HabitForm;