
/**
 * App.js
 * 
 * This component sets up routing for the app and manages global state related to date simulation for habit tracking.
 * 
 * 
 */
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HabitsPage from './pages/HabitsPage';
import NavBar from './components/NavBar';
import SignUp from './pages/auth/SignUp';

function App() {

  // The state to manage the currently simulated date for the app
  const [simulatedDate, setSimulatedDate] = useState(new Date());


  // A function to advance the simulated date by one day
  const simulateNextDay = () => {
    setSimulatedDate(prevDate => {
      const nextDate = new Date(prevDate);
      nextDate.setDate(nextDate.getDate() + 1);
      return nextDate;
    });
  };

  return (
    <Router>

      <NavBar
        simulateNextDay={simulateNextDay}
        setSimulatedDate={setSimulatedDate}
        simulatedDate={simulatedDate} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habitspage" element={<HabitsPage
          simulatedDate={simulatedDate}
          setSimulatedDate={setSimulatedDate}
          simulateNextDay={simulateNextDay}
        />} />
        <Route path='/auth/signup' element={<SignUp />} />
      </Routes>

    </Router>
  );
}

export default App;
