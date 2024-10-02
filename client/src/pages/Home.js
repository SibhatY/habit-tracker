import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (

        <div className='home'>
            <h1>Virtua</h1>
            <p>Track Progress, Shape Character.</p>
            <Link to="/dashboard">
            <button>Get Started</button>
            </Link>

        </div>
    );
};

export default Home;