import React from 'react';
import {useNavigate} from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove the session cookie and update the state
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <div>
            <h1>You are in the dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;