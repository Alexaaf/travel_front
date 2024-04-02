import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {

    if (fullName === "" || email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    const postData = {
      name: fullName,
      email: email,
      password: password,
      role: 0
    };

    axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/api/user/add',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(postData),
      })
        .then((response) => {
          console.log(response.data);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          setError("Something went wrong, please try again later.");
        });
  };

  return (
    <div className="register-container">
      <h1 className="site-name">SPEEDY GETAWAYS</h1>
      <div className="register-form">
        <h2 className="form-title">Register</h2>
        <div className="form-group">
          <label>User Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;