import React from "react";
import '../styles/HabitItem.css';



/**
 * This renders a single habit item that includes the title, progress badge, the ability the mark progress or delete the habit entirely.
 * Also displays the streak information and the coloring/style of the badge and card based on the status of completion.
 */
const HabitItem = ({ habit, onDelete, onMarkDay, calculateProgress }) => {

    // This calculates the progress for the progress badge
    const progress = calculateProgress(habit.daysTracked.length, habit.goal);

    // This is a helper to apply specific styling based on category
    const getCategoryClass = (category) => {
        return `category-tag ${category}`;
    };

    // This calculates the current streak of consecutive days
    const calcStreak = (habit) => {

        if (habit.daysTracked.length === 0) {

            return 0;
        }

        const sortedDates = habit.daysTracked
            .map(date => new Date(date))
            .sort((a, b) => a - b);

        let currentStreak = 1;


        for (let i = 1; i < sortedDates.length; i++) {

            const prevDate = sortedDates[i - 1];
            const currDate = sortedDates[i];

            const diffDays = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {

                currentStreak++;


            }
            else {

                currentStreak = 1;

            }
        }

        return currentStreak;
    };

    const currentStreak = calcStreak(habit);



    // This determines the color of the progress badge based on completion percentage
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

        <div className={`habit-item ${habit.completed ? 'completed' : ''}`}>

            <span className={getCategoryClass(habit.category)}>{habit.category}</span>

            <h3 className="habit-title">{habit.title}</h3>

            {habit.completed ? (
                <div style={{ textAlign: 'center' }}>
                    <span className="completed-label">Completed!</span>
                    <button className="remove-button" onClick={() => onDelete(habit.id)}>Dismiss</button>
                </div>
            ) : (

                <div>
                    <div
                        className="progress-badge"
                        style={{ background: getProgressColor(progress) }}
                        title={`Marked Dates: ${Array.isArray(habit.daysTracked) ? habit.daysTracked.join(", ") : ""}`}
                    >
                        {Array.isArray(habit.daysTracked) ? habit.daysTracked.length : 0} / {habit.goal} days
                    </div>

                    {currentStreak > 1 && (
                        <div className="streak-indicator">
                            🔥 {currentStreak}-day streak!
                        </div>
                    )}

                    <button onClick={() => onMarkDay(habit.id)}>Mark Day as Complete</button>


                    <button onClick={() => onDelete(habit.id)}>Delete</button>

                </div>
            )}
        </div>
    );

};


export default HabitItem;