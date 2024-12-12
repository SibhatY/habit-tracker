import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { useAuth } from '../contexts/AuthContext';


/**
 * This acts as the splash page for the app.
 *
 */
const Home = () => {

    const { currentUser } = useAuth();

    return (

        <div className='home'>
            <div className='content'>

                {currentUser ? (
                    <React.Fragment>
                        <h1>Welcome back, {currentUser.username}!</h1>
                        <p>Your journey to personal growth continues here.</p>
                        <Link to="/habitspage">
                            <button className='start-button'>Track Habits</button>
                        </Link>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h1>Welcome to Virtua</h1>
                        <p>Track Progress, Shape Character.</p>
                        <Link to="/auth/signup">
                            <button className='start-button'>Get Started</button>
                        </Link>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default Home;