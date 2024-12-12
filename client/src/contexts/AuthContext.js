
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        
        // This checks the storage for a token first
        const token = sessionStorage.getItem('authToken');
        if (token) {
            setAuthToken(token);
            
            // WIP
            // setCurrentUser(decodedUser);
        }
    }, []);

    const login = (token, user) => {
        sessionStorage.setItem('authToken', token);
        setAuthToken(token);
        setCurrentUser(user);
    };

    const logout = () => {
        sessionStorage.removeItem('authToken');
        setAuthToken(null);
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ authToken, currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
