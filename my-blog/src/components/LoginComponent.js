import React, { useState } from 'react';
import Navbar from "./widget/navbar";
import './Styles/Login.css'; // Import the CSS file for styling
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginComponent = () => {
    const [state,setState] = useState({
        username:"",
        password:"",
    })
    const [showPassword, setShowPassword] = useState(false);

    const {username,password} = state

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };


    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }

    const sumbitForm=(e)=>{
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted with:', { username, password });

    }
    return (
        <div className="login-wrapper">
            <Navbar/>
            <div className="login-card">
                <h2 className="login-header">Login</h2>
                {JSON.stringify(state)}
                <form
                    className="login-form"
                    onSubmit={sumbitForm}
                >
                    <div className="login-form-group">
                        <label htmlFor="username" className="login-form-label">Username:</label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="login-form-input"
                            value={username}
                            onChange={inputValue("username")}
                            required
                        />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password" className="login-form-label">Password:</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="login-form-input"
                                value={password}
                                onChange={inputValue("password")}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="login-submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
