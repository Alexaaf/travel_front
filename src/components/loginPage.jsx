import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    // const parseJwt = (token) => {
    //   try {
    //       const base64Url = token.split('.')[1];
    //       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //       const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
    //           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //       }).join(''));
  
    //       return JSON.parse(jsonPayload);
    //   } catch (e) {
    //       return null;
    //   }
    // };

    const logInUser = () => {
        if (email === "" || password === "") {
            setError("Please enter both email and password.");
            return;
        }

        const postData = {
            email: email,
            password: password,
        };

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/api/user/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(postData),
        })
            .then((response) => {
            if (response.data) {

                sessionStorage.setItem("userEmail", response.data.email);
                sessionStorage.setItem("userRole", response.data.role);
                sessionStorage.setItem("userName", response.data.name);
                sessionStorage.setItem("userId", response.data.id);

                // localStorage.setItem('token', response.data.token);
                // setUserEmail(email);
            
                // const decodedToken = parseJwt(response.data.token);
                // const userRole = decodedToken && decodedToken.roles && decodedToken.roles.length > 0 
                //                  ? decodedToken.roles[0].authority
                //                  : null;
            
                if (response.data.role === "CLIENT") {
                    navigate("/home");
                } else {
                    navigate("/agent_page");
                }
            } else {
                setError("Invalid email or password");
            }
            })
            .catch((error) => {
                console.log(error);
                setError("An error occurred during login.");
            });
    }

    return (
        <div className="login-container">
            <h1 className="site-name">SPEEDY GETAWAYS</h1>
            <div className="login-form">
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login-button" onClick={logInUser}>
                    Login
                </button>
                {error && <p className="error-message">{error}</p>}
            </div>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default LoginPage;
