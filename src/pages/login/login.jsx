import React, { useState} from 'react';
import { Alert, TextField } from '@mui/material';
import axiosInstance from '../../axios/axiosInstance';
import { useNavigate} from 'react-router-dom';
import './login.css';
import logo from '../../assets/sisense-logo.svg';
import wave from '../../assets/wave.svg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/api/v1/authentication/login', {
                username,
                password,
            });

            localStorage.setItem('token', response.data.access_token);
            navigate('/home');
        } catch (error) {
            setUsername('');
            setPassword('');
            setErrorInput(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const handleInputChange = (event) => {
        setErrorInput(false);
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    };

    return (
        <div className="login-form-container flex center">
            <img src={wave} alt="sisense wave" />
            <div className="login-form flex center">
                <h1>Sign In <span>.</span></h1>
                <TextField
                    error={errorInput}
                    id="outlined-username-input"
                    label="Username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    sx={{ marginBottom: '20px', width: '100%' }}
                    onKeyDown={handleKeyPress}
                />
                <TextField
                    error={errorInput}
                    id="outlined-password-input"
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={handleInputChange}
                    sx={{ marginBottom: '15px', width: '100%' }}
                    onKeyDown={handleKeyPress}
                />
                <div className="link flex">
                    <a href="https://sisense.dev/guides/sdk/">Powered by Compose SDK</a>
                </div>
                <button onClick={handleLogin}>Login</button>
                {errorInput && (
                    <Alert severity="error" sx={{ marginTop: '20px' }}>
                        Wrong Credentials
                    </Alert>
                )}
            </div>
            <div className="bg-logo flex center">
                <img className="wave" src={wave} alt="wave sisense" />
                <img className="logo" src={logo} alt="logo of sisense" />
            </div>
        </div>
    );
};

export default Login;
