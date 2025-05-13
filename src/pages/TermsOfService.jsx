import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfService = () => (
    <>
        <Hero />
        <Header />
        <div className="container my-5">
            <h1 className="text-center mb-4">Terms of Service</h1>
            <ul>
                <li>
                    <strong>Use of Website:</strong> By accessing and using our website, you agree to comply with all applicable laws and these terms.
                </li>
                <li>
                    <strong>Product Information:</strong> We strive to ensure all product details are accurate. However, colors and descriptions may vary slightly.
                </li>
                <li>
                    <strong>Orders:</strong> We reserve the right to refuse or cancel any order at our discretion.
                </li>
                <li>
                    <strong>Intellectual Property:</strong> All content, images, and logos are the property of Illume Libaas and may not be used without permission.
                </li>
                <li>
                    <strong>Limitation of Liability:</strong> Illume Libaas is not liable for any indirect or consequential damages arising from the use of our website or products.
                </li>
                <li>
                    <strong>Policy Changes:</strong> We may update these terms at any time. Continued use of the website means you accept any changes.
                </li>
            </ul>
            <p className="mt-4">
                For any questions regarding our Terms of Service, please contact us at illumecollection1@gmail.com.
            </p>
        </div>
        <Footer />
    </>
);

export default TermsOfService;