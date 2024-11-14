import React, { useState, useEffect } from "react";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

/**
 * This is the main container for displaying and managing habits.
 * Initializes and maintains the state of habits by using the "local storage" (For now, until backend integration)
 * This page renders the HabitList with the ability to modify the list of habits.
 */
const HabitsPage = ({ simulatedDate, setSimulatedDate, simulateNextDay }) => {



    // Initialized the state with habits loaded from local storage,
    // or start with an empty array
    const [habits, setHabits] = useState(() => {

        const savedHabits = localStorage.getItem("habits");

        let initHabits = [];
        if (savedHabits) {

            initHabits = JSON.parse(savedHabits);
        }
        return initHabits;
    });

    // Updates the local storage every time habits change
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    return (
        <div className="habits-collection">

            <section>
                <HabitList
                    habits={habits}
                    setHabits={setHabits}
                    simulatedDate={simulatedDate}
                    setSimulatedDate={setSimulatedDate}
                    simulateNextDay={simulateNextDay}
                />
            </section>


        </div>
    );
};

export default HabitsPage;