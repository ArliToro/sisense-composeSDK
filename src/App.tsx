import './App.css';
import {useEffect} from 'react';
import Login from './pages/login/login.tsx';
import Dashboard from './pages/dashboard/dashboard.tsx';
import {Routes, Route,useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in by checking the session cookie
        const storage = localStorage.getItem('token');

        if (storage) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }, []);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App
