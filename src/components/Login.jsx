import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';



function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmail = /\S+@\S+\.\S+/.test(identifier);
    const isMobile = /^[0-9]{10}$/.test(identifier);

    if (
      ((isEmail && identifier === "test@example.com") ||
        (isMobile && identifier === "9876543210")) &&
      password === "123456"
    ) {
      alert("Login successful!");
      // Navigate to dashboard or profile page
      navigate("/dashboard");
    } else {
      alert("Invalid credentials, redirecting to homepage...");
      navigate("/"); // 👈 send user back to homepage
    }
  };

  return (
    <div className="login-container">
        <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className="login-input"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {/* 👇 Add Cancel button here */}
          <div className="id-password">
            <p>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <p>
              <Link to="/forgot-password">Forgot ID / Password?</Link>
            </p>
          </div>
        </form>
      </div>
      </div>
     );
}

export default Login;

















































