import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HabitsPage from './pages/HabitsPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habitspage" element={<HabitsPage />} />
      </Routes>
      

    </Router>
  );
}

export default App;
