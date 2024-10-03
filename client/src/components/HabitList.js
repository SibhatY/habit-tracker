import React from "react";

const HabitList = ({habits}) => {

    return (
        <div>

            {habits.map((habit) => (
                <div key={habit.id}>
                    <h3>{habit.title}</h3>
                    <p>Progress: {habit.progress}%</p>
                </div>
            ))}
        </div>
    );
};

export default HabitList;