import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message || "Check your email for reset instructions.");
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 400 }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;