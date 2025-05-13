import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter your email address.");
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.success) {
                alert("Subscribed successfully!");
                setEmail("");
            } else {
                alert("Subscription failed.");
            }
        } catch (err) {
            alert("Network error: " + err.message);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="newsletter-section">
                    <div className="newsletter-content">
                        <h3>NEWSLETTER</h3>
                        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                        <form className="newsletter-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-section social-media">
                    <h3>FOLLOW US</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/illumecollection11" className="social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/illume.libaas/" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="contact-info">
                        <p>+92 319 8666526</p>
                        <p>illumecollection1@gmail.com</p>
                        <p>Faisalabad, Pakistan</p>
                    </div>
                </div>
                <div className="footer-section important-links">
                    <h3>IMPORTANT LINKS</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li><a href="#">Collections</a></li>
                    </ul>
                </div> 
                <div className="footer-section customer-support">
                    <h3>CUSTOMER SUPPORT</h3>
                    <ul>
                        <li>
                            <Link to="/contact">Get In Touch</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/shipping-policy">Shipping Policy</Link>
                        </li>
                        <li>
                            <Link to="/refund-policy">Refund Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms-of-service">Terms Of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Illume Libaas &copy; | All Rights Reserved 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
