import './App.css'
import axios from "axios";
import {useEffect, useState} from "react";
import Cookies from 'js-cookie';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in by checking the session cookie
        const sessionCookie = Cookies.get('yourSessionCookieName');

        if (sessionCookie) {
            setIsLoggedIn(true);
        }
    }, []);



    const handleLogin = async () => {
        try {
            const response = await axios.post('https://analytics.cxp-integration.trustyou.com/api/v1/authentication/login', {
                username: 'testdeveloper@trustyou.net',
                password: 'T12345678!',
            });

            const { token } = response.data;

            // Set the session cookie with the SSO token
            Cookies.set('yourSessionCookieName', token);

            setIsLoggedIn(true);
            console.log("this is token",token)
            // Redirect to Sisense
            // window.location.href = `https://your-sisense-instance.com/app`;
        } catch (error) {
            console.error('Error generating SSO token:', error);
        }
    };

    const handleLogout = () => {
        // Remove the session cookie and update the state
        Cookies.remove('yourSessionCookieName');
        setIsLoggedIn(false);
    };

    return (
        <div >
            <h1>React SSO Example</h1>
            {isLoggedIn ? (
                <>
                    <p>You are logged in. Redirecting...</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <button onClick={handleLogin}>Login to Sisense</button>
            )}
        </div>
    );
}

export default App
