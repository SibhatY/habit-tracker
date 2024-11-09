/**
 * HabitList.js
 * 
 * This manages the display and interaction with a list of habit tracking items. The component is handling the user interactions for adding, simulating, and deleting habits, as well as filtering the created habits based on categories (Just one for now). It contains an expanding and collapsing toolbar to show/hide filters.
 * 
 * Dependencies:
 * - React: For building the component using hooks for state and effects.
 * - HabitItem: The component to render individual habits.
 * - HabitForm: For the form that is used for adding habits.
 * - Modal: The component to display the modals for forms. (Habit form for now)
 */




import React, { useEffect, useState } from 'react';
import HabitItem from './HabitItem'
import HabitForm from './HabitForm';
import '../styles/HabitList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';




/**
 * This manages the list of habits, adding, simulating, deleting, and filtering.
 * Displays the UI for simulating the changing of days and the expanding/collapsing filter menu.
 */
const HabitList = ({ habits, setHabits }) => {

    // The state that manages whether the toolbar is expanded or collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    // The state that manages if the add habit form is visible
    const [isAdding, setIsAdding] = useState(false);

    // A function to close the habit form modal
    const closeModal = () => setIsAdding(false);

    // The state for managing the currently simulated date
    const [simulatedDate, setSimulatedDate] = useState(new Date());

    // The state for managing the selected filter category
    const [filter, setFilter] = useState('All');

    // This filters the habits based on the selected category
    const filteredHabits = filter === 'All' ? habits : habits.filter(habit => habit.category === filter);



    // This handles simulating the next day
    const simulateNextDay = (event) => {
        event.stopPropagation();
        setSimulatedDate(prevDate => {
            const nextDate = new Date(prevDate);
            nextDate.setDate(nextDate.getDate() + 1);
            return nextDate;
        });
    };



    // This handles marking a day as completed for a habit
    const markDayHandling = (id) => {

        const todaySim = simulatedDate.toISOString().split("T")[0];

        setHabits(prevHabits => {

            return prevHabits.map((habit) => {

                if (habit.id === id && !habit.completed) {

                    let updatedHabit = { ...habit };

                    if (!habit.daysTracked.includes(todaySim) && habit.daysTracked.length < habit.goal) {

                        updatedHabit.daysTracked = [...habit.daysTracked, todaySim];
                    }
                    if (updatedHabit.daysTracked.length === habit.goal) {
                        updatedHabit.completed = true;
                        updatedHabit.completedOn = todaySim;
                    }

                    return updatedHabit;
                }
                return habit;
            });
        });
    };



    // This handles deleting a habit
    const deleteHandling = (id) => {

        setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    };



    // This calculates the progress of habits based on the days tracked and the goal
    const calculateProgress = (daysTrackedLength, goal) => {

        if (goal === 0) {
            return 0;
        }
        return (daysTrackedLength / goal) * 100;
    };



    return (

        <div className='habitspage-container'>

            <div className={`toolbar ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={() => setIsExpanded(!isExpanded)}>
                <button className='btn' onClick={simulateNextDay}>Simulate Next Day</button>

                <p className='simulated-date'>Simulated Date: {simulatedDate.toDateString()}</p>

                <button className='btn' onClick={(event) => { event.stopPropagation(); setSimulatedDate(new Date()); }}>Reset To Today</button>
            </div>

            {isExpanded && (
                <div className='category-filter'>

                    <label htmlFor='filter'>Category:</label>

                    <select id='filter' value={filter} onChange={(e) => setFilter(e.target.value)}>

                        <option value="All">All</option>
                        <option value="Health">Health</option>
                        <option value="Work">Work</option>
                        <option value="Study">Study</option>
                        <option value="Personal">Personal</option>

                    </select>
                </div>
            )}
            <div className="habit-list">

                {filteredHabits.map((habit) => (

                    <HabitItem
                        key={habit.id}
                        habit={habit}
                        onDelete={deleteHandling}
                        onMarkDay={markDayHandling}
                        calculateProgress={calculateProgress}
                        simulatedDate={simulatedDate}
                    />

                ))}
            </div>

            <div className='add-habit-card' onClick={() => setIsAdding(true)}>
                <FontAwesomeIcon icon={faPlus} size='2x' />

            </div>

            <Modal isOpen={isAdding} onClose={closeModal}>
                <HabitForm setHabits={setHabits} onClose={closeModal} />
            </Modal>



        </div>
    );
};

export default HabitList;