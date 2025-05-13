import React, { useState } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [successMsg, setSuccessMsg] = useState(""); // <-- Add state for success message

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$/i;
        if (!emailPattern.test(form.email)) {
            alert("Only Gmail, Hotmail, or Yahoo email addresses are allowed.");
            return;
        }
        try {
            // Create user in Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );
            const user = userCredential.user;

            // Store additional user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName: form.firstName,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                createdAt: new Date()
            });

            setSuccessMsg("Account created successfully! You can now log in."); // <-- Set success message
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            });
        } catch (err) {
            alert(err.message || "Signup failed.");
        }
    };

    return (
        <>
            <Hero />
            <Header />
            <div className="container auth-container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="auth-form-container">
                            <h2 className="auth-title">Create an Account</h2>
                            {successMsg && (
                                <div className="alert alert-success text-center">{successMsg}</div>
                            )}
                            <form className="auth-form" onSubmit={handleSubmit}>
                                {/* ...existing form fields... */}
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="firstName" 
                                                placeholder="First name" 
                                                required 
                                                pattern="^[a-zA-Z\s]+$" 
                                                title="First name should only contain letters and spaces"
                                                value={form.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="lastName" 
                                                placeholder="Last name" 
                                                required 
                                                pattern="^[a-zA-Z\s]+$" 
                                                title="Last name should only contain letters and spaces"
                                                value={form.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Enter your email" 
                                            required 
                                            pattern="^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.com$"
                                            title="Only Gmail, Hotmail, or Yahoo email addresses are allowed"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            id="phone" 
                                            placeholder="Enter your phone number" 
                                            required 
                                            pattern="^\+?[0-9]{10,15}$" 
                                            title="Phone number should be 10-15 digits and can start with +"
                                            value={form.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Create a password" 
                                            required 
                                            minLength="6" 
                                            title="Password must be at least 6 characters long"
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="confirmPassword" 
                                            placeholder="Confirm your password" 
                                            required 
                                            minLength="6" 
                                            title="Passwords must match"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="terms" required />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to the <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                            </form>
                            <div className="mt-4 text-center">
                                <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
                            </div>
                            <div className="social-login">
                                <p>Or sign up with</p>
                                <div className="social-buttons">
                                    <button className="btn btn-outline-dark social-btn">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="btn btn-outline-dark social-btn">
                                        <i className="fab fa-google"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;