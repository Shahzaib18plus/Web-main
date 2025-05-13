import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShippingPolicy = () => (
    <>
        <Hero />
        <Header />
        <div className="container my-5">
            <h1 className="text-center mb-4">Shipping Policy</h1>
            <h2>Return and Exchange Policy</h2>
            <ul>
                <li><strong>Return Eligibility:</strong> Returns accepted only for damaged or incorrectly shipped items.</li>
                <li><strong>Time Frame for Notification:</strong> Notify us of damaged items within 7 days of receipt.</li>
                <li><strong>Exchange Process:</strong> Initiate exchanges by contacting our customer service within <strong>[7 working days]</strong>.</li>
                <li><strong>Condition of Items for Exchange:</strong> Items must be unused, in original packaging, with tags attached.</li>
                <li><strong>Shipping Costs for Exchanges:</strong> We cover shipping costs for returning damaged/wrong items and sending replacements.</li>
                <li><strong>Refund Policy:</strong> Refunds not provided. Exchanges processed for eligible items only.</li>
                <li><strong>Damaged Items:</strong> Contact carrier or our support team for damage claims.</li>
                <li><strong>Customer Support:</strong> Our team is here to assist you. Contact us for any concerns or inquiries.</li>
            </ul>
            <p className="mt-4">
                By making a purchase, you acknowledge your understanding and acceptance of this policy. If you have objections, please inbox us.
            </p>
        </div>
        <Footer />
    </>
);

export default ShippingPolicy;