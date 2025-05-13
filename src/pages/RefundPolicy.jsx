import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RefundPolicy = () => (
    <>
        <Hero />
        <Header />
        <div className="container my-5">
            <h1 className="text-center mb-4">Refund & Exchange Policy</h1>
            <ul>
                <li>
                    <strong>Refunds:</strong> Returns are accepted only in case of damaged or faulty items. You must notify us and return the item within <strong>7 days</strong> of receiving your order, with the same packing as delivered.
                </li>
                <li>
                    <strong>Exchanges:</strong> You may exchange your item within <strong>14 days</strong> of receiving it, provided it is unused and in the original packaging as delivered.
                </li>
                <li>
                    <strong>Return Condition:</strong> Items must be returned in the same condition and packaging as delivered.
                </li>
                <li>
                    <strong>Eligibility:</strong> Refunds are only processed for damaged, faulty, or incorrect items.
                </li>
            </ul>
            <p className="mt-4">
                For any issues, please contact our customer support team. We are here to help!
            </p>
        </div>
        <Footer />
    </>
);

export default RefundPolicy;