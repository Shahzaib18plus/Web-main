import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, "zareen-boski", id); // Change collection if needed
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.imageurl}
              alt={product.productName}
              style={{ width: "100%", borderRadius: "10px", background: "#f8f9fa" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.productName}</h2>
            <div className="mb-2">
              <span className="text-muted" style={{ textDecoration: "line-through" }}>
                Rs.{product.price?.toLocaleString()} PKR
              </span>
              <span className="fw-bold fs-4 text-danger ms-3">
                Rs.{product.saleprice?.toLocaleString()} PKR
              </span>
              <span className="badge bg-brown ms-3">Sale</span>
            </div>
            <div className="mb-3">
              <span className="text-secondary">Shipping calculated at checkout.</span>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <span className="me-2">Quantity</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
            <div className="mb-3 d-grid gap-2">
              <button
                className="btn btn-dark btn-lg"
                onClick={() => addToCart(product, quantity)}
              >
                Add to cart
              </button>
              <button className="btn btn-outline-dark btn-lg">Buy it now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>
        {`
          .bg-brown {
            background-color: #8d6748 !important;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default ProductDetail;