import React, { useState } from "react";
import "../styles/HabitForm.css"

const HabitForm = ({ setHabits, onClose }) => {

    const [title, setTitle] = useState('');
    const [goal, setGoal] = useState(10);

    const submitHandling = (e) => {
        e.preventDefault();

        if (!title.trim()) {

            alert("Title of habit cannot be empty!!");
            return;
        }

        const today = new Date().toISOString().split("T")[0]
        const endDate = new Date();

        endDate.setDate(endDate.getDate() + goal);


        setHabits(prevHabits => [
            ...prevHabits,
            { id: new Date().getTime(), title, goal, daysTracked: [], startDate: today, endDate: endDate.toISOString().split("T")[0], }
        ]);
        setTitle('');
        setGoal(10);
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



                <button type="submit">Add Habit</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default HabitForm;