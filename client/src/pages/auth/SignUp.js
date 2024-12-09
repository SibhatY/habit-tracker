import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (event) => {

        event.preventDefault();

        setError('');

        // API request for registering the user
        try {
            const response = await fetch('http://localhost:5001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {

                const errorData = await response.json();
                throw new Error(errorData.msg || 'Failed to register');
            }
            console.log('Signing up:', username, password);
            // On successful signup:
            navigate('/home');

        } catch (error) {
            console.error('Signup error:', error.message);
            setError(error.message);
        }

    };


    return (
        <div>
            <form onSubmit={handleSignUp}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

export default SignUp;