import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';


/**
 * This acts as the splash page for the app.
 *
 */
const Home = () => {
    
    return (

        <div className='home'>
            <h1>Splash Page</h1>
            <p>Track Progress, Shape Character.</p>
            <Link to="/dashboard">
            <button>Get Started</button>
            </Link>

            <h2>WIP</h2>

        </div>
    );
};

export default Home;