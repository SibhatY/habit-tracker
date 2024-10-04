import React from "react";

const HabitList = ({habits, setHabits}) => {


    const deleteHandling = (id) => {

        setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };

    return (
        <div>

            {habits.map((habit) => (
                <div key={habit.id}>
                    <h3>{habit.title}</h3>
                    <p>Progress: {habit.progress}%</p>
                    <button onClick={() => deleteHandling(habit.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default HabitList;