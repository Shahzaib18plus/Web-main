import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  const { cart } = useCart();
  const grandTotal = cart.reduce((sum, item) => sum + item.saleprice * item.quantity, 0);

  // State for form fields
  const [form, setForm] = useState({
    email: "",
    offers: false,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postal: "",
    phone: "",
    saveInfo: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle form field changes
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Prepare data
    const contact = { email: form.email, offers: form.offers };
    const delivery = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      apartment: form.apartment,
      city: form.city,
      postal: form.postal,
      phone: form.phone,
      saveInfo: form.saveInfo,
      country: "Pakistan",
    };

    try {
      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          delivery,
          cart,
          total: grandTotal,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Order placed successfully! Please check your email for confirmation.");
        // Optionally clear cart here
      } else {
        setError("Failed to place order. Please try again.");
      }
    } catch (err) {
      setError("Failed to place order. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Hero />
      <Header />
      <div style={{ background: '#f6f6f6', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8 mb-4">
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <form onSubmit={handleSubmit}>
                  <h4 className="mb-3">Contact</h4>
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email or mobile phone number"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="offersCheck"
                      name="offers"
                      checked={form.offers}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="offersCheck">
                      Email me with news and offers
                    </label>
                  </div>
                  <h4 className="mb-3">Delivery</h4>
                  <select className="form-select mb-2" defaultValue="Pakistan" disabled>
                    <option>Pakistan</option>
                  </select>
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Apartment, suite, etc. (optional)"
                    name="apartment"
                    value={form.apartment}
                    onChange={handleChange}
                  />
                  <div className="row mb-2">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postal code (optional)"
                        name="postal"
                        value={form.postal}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <input
                    type="tel"
                    className="form-control mb-2"
                    placeholder="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="saveInfoCheck"
                      name="saveInfo"
                      checked={form.saveInfo}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="saveInfoCheck">
                      Save this information for next time
                    </label>
                  </div>
                  <button type="submit" className="btn btn-success w-100" disabled={loading}>
                    {loading ? "Placing Order..." : "Complete Order"}
                  </button>
                  {success && <div className="alert alert-success mt-3">{success}</div>}
                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="bg-white p-4 rounded shadow-sm">
                {cart.length === 0 ? (
                  <div className="text-center">
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="d-flex align-items-center mb-3">
                        <div style={{ position: 'relative' }}>
                          <img src={item.imageurl} alt={item.productName} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8, border: '1px solid #eee' }} />
                          <span style={{ position: 'absolute', top: -8, right: -8, background: '#222', color: '#fff', borderRadius: '50%', fontSize: 13, width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                            {item.quantity}
                          </span>
                        </div>
                        <div className="ms-3 flex-grow-1">
                          <div style={{ fontWeight: 500 }}>{item.productName}</div>
                          <div className="text-muted" style={{ fontSize: 14 }}>Rs.{item.saleprice?.toLocaleString()} PKR</div>
                        </div>
                        <div style={{ fontWeight: 500 }}>Rs.{(item.saleprice * item.quantity).toLocaleString()} PKR</div>
                      </div>
                    ))}
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>Rs.{grandTotal.toLocaleString()} PKR</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping <span title="Shipping is free for all orders">&#9432;</span></span>
                      <span className="text-success">FREE</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="text-success" style={{ fontSize: 15 }}>&#128230; FREE SHIPPING</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontWeight: 600, fontSize: 20 }}>Total</span>
                      <span style={{ fontWeight: 700, fontSize: 24 }}>PKR Rs.{grandTotal.toLocaleString()}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout; 