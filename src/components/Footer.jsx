import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="newsletter-section">
                    <div className="newsletter-content">
                        <h3>NEWSLETTER</h3>
                        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email address" className="newsletter-input" />
                            <button type="submit" className="newsletter-btn">Subscribe</button>
                        </div>
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
                        <li><a href="#">About</a></li>
                        <li><a href="#">Collections</a></li>
                    </ul>
                </div> 
                <div className="footer-section customer-support">
                    <h3>CUSTOMER SUPPORT</h3>
                    <ul>
                        <li><a href="#">Get In Touch</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Terms Of Service</a></li>
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
