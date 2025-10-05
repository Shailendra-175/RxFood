import React from "react";
import { Link, useNavigate } from "react-router-dom";  // 👈 add useNavigate
import "../App.css";

export default function SignUp() {
    const navigate = useNavigate(); // 👈 define navigate
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="email" placeholder="Email Address" required />
        <input type="date" placeholder="Date of Birth" required />

        <select required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Sign Up</button>
      </form>

      <div className="signup-footer">
        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot ID / Password?</Link>
        </p>
      </div>
    </div>
  );
}
