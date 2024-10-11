import React from "react";
import '../styles/HabitItem.css';


const HabitItem = ({ habit, onDelete, onMarkDay, calculateProgress }) => {

    const progress = calculateProgress(habit.daysTracked.length, habit.goal);



    const getProgressColor = (progress) => {

        if (progress < 50) {

            const red = 255;
            const green = Math.round((progress / 50) * 200);
            return `rgb(${red}, ${green}, 0)`;
        } else {

            const red = Math.round(255 - ((progress - 50) / 50) * 255);
            const green = 200 + Math.round(((progress - 50) / 50) * 50);
            return `rgb(${red}, ${green}, 0)`;
        }
    };

    return (

        <div className="habit-item">
            <h3>{habit.title}</h3>

            <div
            className="progress-badge"
            style={{ background: getProgressColor(progress) }}
            title={`Marked Dates: ${habit.daysTracked.join(", ")}`}
            >
                {habit.daysTracked.length} / {habit.goal} days
            </div>

            <button onClick={() => onMarkDay(habit.id)}>Mark Day as Complete</button>

            <button onClick={() => onDelete(habit.id)}>Delete</button>
        </div>
    );
};

export default HabitItem;