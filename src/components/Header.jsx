import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RxFood-8.png";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img 
          src={logo}
          alt="RxFood Logo" 
          className="brand-logo" 
        />
        <hr className="brand-divider" />
               <p className="brand-subtitle">by Dr.ABC</p>
      </div>

      <nav className="nav">
        <Link to="/" className="cta">HOME</Link>
        <Link to="/login" className="cta btn-outline">LOGIN</Link>
        <Link to="/why-us" className="cta">WHY US?</Link>
        <Link to="/weight-loss" className="cta">WEIGHT LOSS</Link>

        <Link to="/health-plans" className="cta">HEALTH PLANS</Link>
        <Link to="/reviews" className="cta">PATIENT REVIEWS</Link>
        <Link to="/patient-stories" className="cta">PATIENT STORIES</Link>
        <Link to="/health-shop" className="cta">HEALTH SHOP</Link>
        <Link to="/health-recipes" className="cta">HEALTHY RECIPES</Link>
      </nav>
    </header>
  );
}

export default Header;























