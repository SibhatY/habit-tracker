import React, { useState } from 'react';
import HabitItem from './HabitItem'
import HabitForm from './HabitForm';
import '../styles/HabitList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HabitList = ({ habits, setHabits }) => {

    const [isAdding, setIsAdding] = useState(false);

    const markDayHandling = (id) => {

        const today = new Date().toISOString().split("T")[0];

        setHabits(prevHabits => {

            return prevHabits.map((habit) => {

                if (habit.id === id) {

                    

                    if (!Array.isArray(habit.daysTracked)) {
                        habit.daysTracked = [];
                    }

                    if (!habit.daysTracked.includes(today) && habit.daysTracked.length < habit.goal) {

                        return {
                            ...habit, daysTracked: [...habit.daysTracked, today],
                        };
                    }

                    // if (habit.daysTracked < habit.goal) {
                    //     return {...habit, daysTracked: habit.daysTracked + 1};
                    // }
                }
                return habit;
            });
        });
    };

    
    const deleteHandling = (id) => {

        setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };




    const calculateProgress = (daysTrackedLength, goal) => {

        return (daysTrackedLength / goal) * 100;
    };



    return (
        <div className="habit-list">

            {habits.map((habit) => (

                <HabitItem
                    key={habit.id}
                    habit={habit}
                    onDelete={deleteHandling}
                    onMarkDay={markDayHandling}
                    calculateProgress={calculateProgress}
                />

            ))}

            <div className='add-habit-card' onClick={() => setIsAdding(true)}>
                <FontAwesomeIcon icon={faPlus} size='2x' />

            </div>

            {isAdding && (
                <HabitForm setHabits={setHabits} onClose={() => setIsAdding(false)} />
            )}

        </div>
    );
};

export default HabitList;