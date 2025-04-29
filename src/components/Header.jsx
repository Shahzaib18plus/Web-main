import React from "react";
import logo from "../assets/logo.jpg";
 
const Header = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src={logo} alt="Brand Logo" className="logo" /></a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Summer Collection</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Winter Collection</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li> 
                            </ul>
                        </div>
                        <a href="#" className="nav-link text-light me-2">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="visually-hidden">Cart</span>
                        </a>
                        <div className="auth-buttons">
                            <a href="/login" className="btn btn-outline-light btn-sm me-2">Login</a>
                            <a href="/signup" className="btn btn-light btn-sm">Signup</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
