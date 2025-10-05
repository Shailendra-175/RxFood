import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "../App.css";

export default function ResetPassword() {
  const [searchParams] = useSearchParams(); // get token from URL
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Example: call your backend API
    fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Password reset successful! You can now login.");
        } else {
          setMessage(data.error || "Something went wrong.");
        }
      })
      .catch((err) => setMessage("Network error."));
  };

  return (
    <div className="signup-container forgot-password">
      <h2>Reset Password</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="info-text">{message}</p>}
      <div className="signup-footer">
        <p>
          Remembered your password? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
