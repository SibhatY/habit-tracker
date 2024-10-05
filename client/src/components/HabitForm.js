import React, { useState } from "react";

const HabitForm = ({setHabits}) => {

    const [title, setTitle] = useState('');
    const [goal, setGoal] = useState(10);

    const submitHandling = (e) => {
        e.preventDefault();

        setHabits(prevHabits => [
            ...prevHabits,
            {id: prevHabits.length+1, title, daysTracked: 0, goal}
        ]);
        setTitle('');
        setGoal(10);
    }
    

    return (

        <form onSubmit={submitHandling}>

            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <select value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
                <option value={10}>10 days</option>
                <option value={30}>30 days</option>
                <option value={60}>60 days</option>
            </select>

    

            <button type="submit">Add Habit</button>
        </form>
    );
};

export default HabitForm;