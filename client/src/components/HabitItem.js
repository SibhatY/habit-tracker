import React from "react";
import '../styles/HabitItem.css';


const HabitItem = ({ habit, onDelete, onMarkDay, calculateProgress }) => {

    return (

        <div className="habit-item">
            <h3>{habit.title}</h3>

            <p>Days Completed: {habit.daysTracked} / {habit.goal}</p>

            <div
                style={{
                    width: `${calculateProgress(habit.daysTracked, habit.goal)}%`,
                    backgroundColor: "green",
                    height: "10px"
                }}
            />

            <button onClick={() => onMarkDay(habit.id)}>Mark Day as Complete</button>

            <button onClick={() => onDelete(habit.id)}>Delete</button>
        </div>
    );
};

export default HabitItem;