import React, { useState } from "react";

const HabitForm = ({setHabits}) => {

    const [title, setTitle] = useState('');
    const [progress, setProgress] = useState(0);

    const submitHandling = (e) => {
        e.preventDefault();

        setHabits(prevHabits => [
            ...prevHabits,
            {id: prevHabits.length+1, title, progress}
        ]);
        setTitle('');
        setProgress(0);
    }

    return (

        <form onSubmit={submitHandling}>

            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <input type="number" placeholder="Progress %" value={progress} onChange={(e) => setProgress(e.target.value)} />

            <button type="submit">Add a Habit</button>
        </form>
    );
};

export default HabitForm;