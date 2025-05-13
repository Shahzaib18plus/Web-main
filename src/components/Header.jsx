import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaUserCircle } from "react-icons/fa";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../context/CartContext";

const Header = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Fetch user data from Firestore
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const data = userDoc.data();
                    setUserName(`${data.firstName} ${data.lastName}`);
                } else {
                    // Document does not exist, don't throw error
                    setUserName(user.email);
                }
            } else {
                setUserName("");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleUserIconClick = () => {
        navigate("/login");
    };

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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="summerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Summer Collection
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="summerDropdown">
                                        <li><a className="dropdown-item" href="#">Wash n Wear</a></li>
                                        <li><Link className="dropdown-item" to="/boski">Boski</Link></li>
                                        <li><a className="dropdown-item" href="#">Cotton</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="winterDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Winter Collection
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="winterDropdown">
                                        <li><a className="dropdown-item" href="#">Wool</a></li>
                                        <li><a className="dropdown-item" href="#">Wash n Wear</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li> 
                            </ul>
                        </div>
                        <Link
                            to="/cart"
                            className="nav-link text-light me-2 position-relative"
                            style={{ marginTop: "8px" }}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            <span className="visually-hidden">Cart</span>
                            {cartCount > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: "0.8rem" }}
                                >
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            className="btn btn-link nav-link text-light p-0 position-relative"
                            style={{ fontSize: "1.7rem" }}
                            onClick={handleUserIconClick}
                        >
                            <FaUserCircle />
                            <span className="visually-hidden">User</span>
                            {/* Tooltip on hover */}
                            {userName && (
                                <span
                                    className="position-absolute bg-dark text-white px-2 py-1 rounded"
                                    style={{
                                        top: "-35px",
                                        right: "-10px",
                                        fontSize: "0.9rem",
                                        whiteSpace: "nowrap",
                                        zIndex: 1000,
                                        display: "none"
                                    }}
                                    id="user-tooltip"
                                >
                                    {userName}
                                </span>
                            )}
                        </button>
                        <style>
                            {`
                            .btn-link.nav-link:hover #user-tooltip {
                                display: block !important;
                            }
                            `}
                        </style>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;