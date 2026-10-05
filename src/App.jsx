import { useState } from "react";
import "./App.css";

function App(){

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear messages when user starts typing
    setError("");
    setSuccess("");
  };

  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault();

    // Check empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    // Check password length
    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    // Check password matching
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Success
    setSuccess("Registration successful!");

    console.log("Registered User:", formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="container">

      <div className="register-box">

        <h1>Create Account</h1>

        <p className="subtitle">
          Register to get started
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="error">
              {error}
            </p>
          )}

          {/* Success Message */}
          {success && (
            <p className="success">
              {success}
            </p>
          )}

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default App;