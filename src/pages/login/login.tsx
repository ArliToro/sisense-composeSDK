import React, { useRef} from 'react';
import {TextField} from "@mui/material";
import axiosInstance from "../../axios/axiosInstance.tsx";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const username = useRef<string>("");
    const password = useRef<string>("");
    const navigate = useNavigate();



    const handleLogin = async (username:string,password:string) => {
        try {
            const response = await axiosInstance.post('/api/v1/authentication/login', {
                username: username,
                password: password,
            });

            localStorage.setItem('token', response.data.access_token);
            navigate('/dashboard');

            console.log("this is token",response.data.access_token)
        } catch (error) {
            console.error('Error generating SSO token:', error);
        }
    };

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.name === "username") {
            username.current = event.target.value;
        } else if (event.target.name === "password") {
            password.current = event.target.value;
        }
    }

    return (
        <div>
            <h1>This is login</h1>
            <TextField
                id="outlined-password-input"
                label="Username"
                name="username"
                type="text"
                onChange={handleInputChange}
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleInputChange}
            />
            <button onClick={()=>handleLogin(username.current, password.current)}>Login</button>
        </div>
    );
};

export default Login;