import React, {useState} from 'react';
import HabitItem from './HabitItem'
import HabitForm from './HabitForm';
import '../styles/HabitList.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const HabitList = ({habits, setHabits}) => {

    const [isAdding, setIsAdding] = useState(false);

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




    const calculateProgress = (daysTracked, goal) => {

        return (daysTracked / goal) * 100;
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
                <p>Add New Habit</p>
            </div>

            {isAdding && (
                <HabitForm setHabits={setHabits} onClose={() => setIsAdding(false)} />
            )}

        </div>
    );
};

export default HabitList;