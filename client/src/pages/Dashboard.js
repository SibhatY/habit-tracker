import React, { useState, useEffect } from "react";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

/**
 * Dashboard component
 * 
 * The main hub where you are able to view habits
 *  
 */
const Dashboard = () => {

    
    //To retrieve haibts from the local storage or init array
    const [habits, setHabits] = useState(() => {

        const savedHabits = localStorage.getItem("habits");
        
        let initHabits = [];
        if (savedHabits) {

            initHabits = JSON.parse(savedHabits);
        }
        return initHabits;
    });

    //Updates the local storage every time habits change
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);

    return (
        <div className="dashboard">

            <section>
                <HabitList habits = {habits} setHabits={setHabits} />
            </section>
            <section>
                <HabitForm setHabits = {setHabits} />
            </section>
            {/* <section>
                <ProgressTracker habits = {habits} />
            </section> */}
    
        </div>
    );
};

export default Dashboard;