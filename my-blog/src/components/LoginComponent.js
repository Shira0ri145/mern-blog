import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./widget/navbar";
import './Styles/Login.css'; // Import the CSS file for styling
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { authenticate, getUser } from '../service/authorize';
import {useNavigate} from "react-router-dom";

const LoginComponent = (props) => {
    const [state,setState] = useState({
        username:"",
        password:"",
    })
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {username,password} = state

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };


    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }

    const sumbitForm=(e)=>{
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API}/login`,{username,password})
        .then(response=>{
            authenticate(response, () => navigate("/blogs")); // Use navigate 
        }).catch(err=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data.error,
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    useEffect(()=>{
        if (getUser()) {
            // Show the alert first
            Swal.fire({
                icon: "error",
                title: "You are already logged in",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Redirect after alert is closed
                navigate("/");
            });
        }
        
    },[navigate])

    return (
        <div className="login-wrapper">
            <Navbar/>
            <div className="login-card">
                <h2 className="login-header">Login</h2>
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
