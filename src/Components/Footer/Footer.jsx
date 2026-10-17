import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-brand">
          <h2 className="footer-logo">Food Plaza<span></span></h2>
          <p className="footer-tagline">
            Delivering hot, fresh, and authentic culinary experiences straight to your doorstep in minutes.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/" aria-label="Facebook">🌐</a>
            <a href="www.instagram.com" aria-label="Instagram">📸</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="./About">About Us</a></li>
            <li><a href="./Contact">Contact</a></li>
            <li><a href="#blog">Food Blog</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3>Help & Contact</h3>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Support</a></li>
            <li><a href="#track">Track Order</a></li>
            <li><a href="#partner">Partner with Us</a></li>
          </ul>
        </div>

        {/* App Download / Newsletter Column */}
        <div className="footer-column">
          <h3>Get the App</h3>
          <p className="footer-subtext">Order faster and track orders live with our mobile app.</p>
          <div className="app-buttons">
            <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"><button className="app-btn">🍏 App Store</button></a>
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en-US&pli=1"><button className="app-btn">🤖 Google Play</button></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Food Plaza. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer