import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // reuse your existing CSS

export default function ForgotPassword() {
  return (
    <div className="signup-container">
      <h2>Forgot ID / Password</h2>
      <p className="info-text">
        Enter your registered Email or Mobile Number. We will send you instructions to reset your password.
      </p>

      <form className="signup-form">
        <input
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="signup-footer">
        <p>
          Remember your account? <Link to="/login">Login</Link>
        </p>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
