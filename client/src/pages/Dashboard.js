import React, { useState } from "react";
import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

/**
 * Dashboard component
 * 
 * The main hub where you are able to view habits
 *  
 */
const Dashboard = () => {

    //Initialized the array of habits
    
    const [habits, setHabits] = useState([
        //Examples of habits for testing
        { id: 1, title: "Read 20 minutes", progress: 60 },
        {id: 2, title: "Workout", progress: 20 }
    ]);

    return (
        <div className="dashboard">

            <section>
                <HabitList habits = {habits} />
            </section>
            {/* <section>
                <HabitForm setHabits = {setHabits} />
            </section>
            <section>
                <ProgressTracker habits = {habits} />
            </section> */}
    
        </div>
    );
};

export default Dashboard;