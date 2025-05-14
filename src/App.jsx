import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact"; 
import Cart from "./pages/Cart";
import ShippingPolicy from "./pages/ShippingPolicy";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // <-- Import Privacy Policy
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import Boski from "./pages/Boski";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import SearchPage from "./pages/SearchPage";

const App = () => {
    return (
        <CartProvider>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Add this line */}
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/boski" element={<Boski />} />
                <Route path="/boski/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Router>
        </CartProvider>
    );
};

export default App;

