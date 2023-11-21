import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from "./containers/navbar/navbar.jsx";

const PrivateRoute = ({ children }) => {

    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <Outlet />
        </div>
    );
};

export default PrivateRoute;