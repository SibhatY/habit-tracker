import React from "react";
import '../styles/HabitItem.css';


const HabitItem = ({ habit, onDelete, onMarkDay, calculateProgress }) => {

    const progress = calculateProgress(habit.daysTracked.length, habit.goal);


    const calcStreak = (habit) => {

        if (habit.daysTracked.length === 0) {

            return 0;
        }
      
        const sortedDates = habit.daysTracked
          .map(date => new Date(date))
          .sort((a, b) => b - a);
      
        let currentStreak = 1;
        let maxStreak = 1;

        for (let i = 1; i < sortedDates.length; i++) {

          const prevDate = sortedDates[i - 1];
          const currDate = sortedDates[i];
          
          const diffDays = Math.floor((prevDate - currDate) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {

            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);

          }
          else {

            currentStreak = 1;
          }
        }
      
        return currentStreak;
      };

    const currentStreak = calcStreak(habit);



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
    );
};

export default HabitItem;