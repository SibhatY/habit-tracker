import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';


/**
 * The component allows for a navigation menu using React Router links.
 * It allows users to navigate to different parts of the app.
 * 
 */
const NavBar = () => {

    return (
        <nav>
            <div className='navbar-container'>
                <h1 className='navbar-title'>
                    <Link to='/'>Virtua</Link>
                </h1>

                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/habitspage">Habits</Link></li>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;