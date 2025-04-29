import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Contact.css"; 

const Contact = () => {
    return (
        <>
            <Hero />
            <Header />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
