import React from "react";
import HabitItem from './HabitItem'

const HabitList = ({habits, setHabits}) => {



    const markDayHandling = (id) => {

        setHabits(prevHabits => {

            return prevHabits.map((habit) => {

                if (habit.id === id) {

                    return {...habit, daysTracked: habit.daysTracked + 1};
                }
                else {

                    return habit;
                }
            });
        });
    };



    const deleteHandling = (id) => {

        setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };

    return (
        <div className="habit-list">

            {habits.map((habit) => (
                
                <HabitItem 
                key={habit.id}
                habit={habit}
                onDelete={deleteHandling}
                onMarkDay={markDayHandling}
                />

            ))}
        </div>
    );
};

export default HabitList;