import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => (
    <>
        <Hero />
        <Header />
        <div className="container my-5">
            <h1 className="text-center mb-4">About Illume Libaas</h1>
            <p>
                <strong>Illume Libaas</strong> is dedicated to providing premium quality gents unstitched suits, blending tradition with modern style. Our collections are carefully curated to offer a wide range of fabrics and designs, ensuring every customer finds the perfect match for their taste and occasion.
            </p>
            <h2 className="mt-4">Our Commitment</h2>
            <ul>
                <li>
                    <strong>Quality Fabrics:</strong> We source only the finest materials, including Wash n Wear, Boski, Cotton, and Wool, to ensure comfort and durability.
                </li>
                <li>
                    <strong>Customer Satisfaction:</strong> Our team is committed to providing excellent service and support, from browsing to after-sales.
                </li>
                <li>
                    <strong>Easy Exchange Policy:</strong> If you receive a damaged or incorrect item, we offer a hassle-free exchange process. Please notify us within 7 days of receipt.
                </li>
                <li>
                    <strong>Secure Shopping:</strong> Shop with confidence on our secure platform, knowing your information is protected.
                </li>
            </ul>
            <h2 className="mt-4">Why Choose Us?</h2>
            <ul>
                <li>Wide variety of unstitched gents fabrics for every season and occasion.</li>
                <li>Transparent policies and dedicated customer support.</li>
                <li>Fast and reliable shipping across Pakistan.</li>
                <li>Passion for style, tradition, and customer care.</li>
            </ul>
            <p className="mt-4">
                Thank you for choosing Illume Libaas. We look forward to being a part of your wardrobe and special moments. For any questions or assistance, please contact our support team.
            </p>
        </div>
        <Footer />
    </>
);

export default About;