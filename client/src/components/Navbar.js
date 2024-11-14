import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


/**
 * The component allows for a navigation menu using React Router links.
 * It allows users to navigate to different parts of the app.
 * 
 */
const NavBar = ({ simulatedDate, setSimulatedDate, simulateNextDay}) => {

    const location = useLocation();
    const showSim = location.pathname === '/habitspage';
    const [isOpen, setIsOpen] = useState(false);

    const toggleControls = () => {
        setIsOpen(!isOpen);
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });
    }

    return (
        <nav>
            <div className='navbar-container'>
                <h1 className='navbar-title'>
                    <Link to='/'>Virtua</Link>
                </h1>

                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/dashboard">Dashboard</Link></li>

                    <li>
                        <Link to="/habitspage">Habits</Link>
                        
                    </li>
                </ul>

                {showSim && (
                    <div className='simulation-toggle' onClick={toggleControls}>
                        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className='icon-chevron' />
                        </div>
                )}


                {showSim && isOpen && (
                    <div className='simulation-controls'>
                        <button onClick={simulateNextDay}>Next Day</button>

                        <span className="date-display">{formatDate(simulatedDate)}</span>

                        <button onClick={() => setSimulatedDate(new Date())}>Reset to Today</button>
                    </div>
                )}
            </div>
        </nav>

    );
};

export default NavBar;