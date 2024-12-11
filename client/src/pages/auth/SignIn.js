import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from 'react-router-dom';


function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const [justRegistered, setJustRegistered] = useState(false);


    useEffect(() => {

        if (location.state?.fromRegistration) {

            setJustRegistered(true);
            setTimeout(() => setJustRegistered(false), 5000);
        }
    }, [location.state]);


    const handleSignIn = async (event) => {

        event.preventDefault();
        setError('');

        try {

            const response = await fetch('http://localhost:5001/users/login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {

                const errorData = await response.json();

                throw new Error(errorData.msg || 'Failed to login');
            }

            const result = await response.json();
            console.log('Login Successful', result);

            sessionStorage.setItem('authToken', result.token);
            navigate('/dashboard');


        } catch (error) {

            console.error('Login error:', error.message);
            setError(error.message);
        }
    };


    return (
        <div>
            <form onSubmit={handleSignIn}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Sign In</button>
                <p>{error}</p>
            </form>
            {justRegistered && <p className="success-message">Registration successful! Please log in to continue.</p>}
            <p>New here? <Link to="/auth/signup">Sign Up</Link></p>
        </div>
    );


}

export default SignIn;