import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./component.css";

function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <Link to="/login">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
        <div>
          <p className=""></p>
          <small id="emailHelp" class="form-text text-muted">
            If Account exist then
          </small>
          <Link className="btn btn-link" to="/login">
            <li>Login!!!</li>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Registration;
