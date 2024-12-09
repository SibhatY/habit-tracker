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
            <div className='content'>
                <h1>Welcome to Virtua</h1>
                <p>Track Progress, Shape Character.</p>
                <Link to="/auth/signup">
                    <button className='start-button'>Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;