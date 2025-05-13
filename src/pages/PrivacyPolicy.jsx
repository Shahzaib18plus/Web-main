import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => (
    <>
        <Hero />
        <Header />
        <div className="container my-5">
            <h1 className="text-center mb-4">Privacy Policy</h1>
            <p>
                At Illume Libaas, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make a purchase.
            </p>
            <h2>Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment details when you place an order or contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages viewed and actions taken.</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <ul>
                <li>To process and fulfill your orders.</li>
                <li>To communicate with you about your orders, promotions, or updates.</li>
                <li>To improve our website and customer service.</li>
                <li>To comply with legal obligations.</li>
            </ul>
            <h2>Data Security</h2>
            <p>
                We implement industry-standard security measures to protect your data. Your information is never sold or shared with third parties except as required to fulfill your order or by law.
            </p>
            <h2>Cookies</h2>
            <p>
                Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings if you prefer.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or concerns about our privacy practices, please contact us at illumecollection1@gmail.com.
            </p>
            <p className="mt-4">
                By using our website, you consent to this Privacy Policy.
            </p>
        </div>
        <Footer />
    </>
);

export default PrivacyPolicy;