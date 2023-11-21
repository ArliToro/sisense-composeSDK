import './App.css';
import {useEffect} from 'react';
import Login from './pages/login/login.jsx';
import Home from './pages/home/home.jsx';
import {Routes, Route, useNavigate} from "react-router-dom";
import DashboardContext from "./context/context.jsx"
import PrivateRoute from './PrivateRoute';

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
        <DashboardContext>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<Home />}/>
                    {/*<Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />*/}
                </Routes>
        </DashboardContext>
    );
}

export default App
