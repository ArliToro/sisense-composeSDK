import './App.css';
import {useEffect} from 'react';
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import {Routes, Route,useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const storage = localStorage.getItem('token');

        if (storage) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App
