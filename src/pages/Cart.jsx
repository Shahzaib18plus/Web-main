import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();
    return (
        <>
            <Hero />
            <Header />
            <div className="container my-5">
                <h1 className="text-center mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <div className="text-center">
                        <p>Your cart is currently empty.</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td data-label="Product">
                                            <img src={item.imageurl} alt={item.productName} style={{ width: 60, height: 60, objectFit: 'cover', marginRight: 10, borderRadius: 6 }} />
                                            {item.productName}
                                        </td>
                                        <td data-label="Price">Rs.{item.saleprice?.toLocaleString()} PKR</td>
                                        <td data-label="Quantity">
                                            <div className="d-inline-flex align-items-center gap-2 cart-qty-group">
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    disabled={item.quantity === 1}
                                                    style={{ minWidth: 32 }}
                                                >
                                                    -
                                                </button>
                                                <span style={{ minWidth: 24, textAlign: "center" }}>{item.quantity}</span>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    style={{ minWidth: 32 }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td data-label="Total">Rs.{(item.saleprice * item.quantity).toLocaleString()} PKR</td>
                                        <td data-label="Action">
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="text-end fw-bold fs-5 mb-3">
                            Grand Total: Rs.{cart.reduce((sum, item) => sum + item.saleprice * item.quantity, 0).toLocaleString()} PKR
                        </div>
                        <div className="text-end">
                            <button className="btn btn-success btn-lg" onClick={() => navigate('/checkout')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;