import React, { useEffect, useState } from 'react';
import HabitItem from './HabitItem'
import HabitForm from './HabitForm';
import '../styles/HabitList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const HabitList = ({ habits, setHabits }) => {

    const [isAdding, setIsAdding] = useState(false);

    const closeModal = () => setIsAdding(false);

    const [simulatedDate, setSimulatedDate] = useState(new Date());

    useEffect(() => {
        console.log(`Sim Date Updated: ${simulatedDate.toDateString()}`);
    }, [simulatedDate]);


    const simulateNextDay = () => {

        setSimulatedDate(prevDate => {
            const nextDate = new Date(prevDate);
            nextDate.setDate(nextDate.getDate() + 1);
            return nextDate;
        });
    };




    const markDayHandling = (id) => {

        //const today = new Date().toISOString().split("T")[0];
        const todaySim = simulatedDate.toISOString().split("T")[0];

        setHabits(prevHabits => {

            return prevHabits.map((habit) => {

                if (habit.id === id) {


                    if (!habit.daysTracked.includes(todaySim) && habit.daysTracked.length < habit.goal) {

                        return {
                            ...habit, daysTracked: [...habit.daysTracked, todaySim],
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

        if (goal === 0) {
            return 0;
        }
        return (daysTrackedLength / goal) * 100;
    };



    return (

        <div className='dashboard-container'>

            <div className='toolbar'>
                <button className='btn' onClick={simulateNextDay}>Simulate Next Day</button>

                <p className='simulated-date'>Simulated Date: {simulatedDate.toDateString()}</p>

                <button className='btn' onClick={() => setSimulatedDate(new Date())}>Reset To Today</button>
            </div>

        <div className="habit-list">

            {habits.map((habit) => (

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