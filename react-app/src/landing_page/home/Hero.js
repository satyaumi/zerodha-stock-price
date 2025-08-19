import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";   // ✅ make sure you have home.css for styling

function Hero() {
  return (
    <div className="home-wrapper">
      <div className="hero-container">
        <img
          src="media/homeHero.png"
          alt="Hero Banner"
          className="hero-image"
        />

        <h1 className="hero-title">Invest in everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in <strong>stocks, derivatives, mutual funds</strong>, and more.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="hero-btn">
            Login
          </Link>
          <Link to="/signup" className="hero-btn secondary">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
