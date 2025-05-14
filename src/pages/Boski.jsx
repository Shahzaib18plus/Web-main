import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Boski() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "zareen-boski"));
      const allProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(allProducts);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <Header />
      <div className="container" style={{ marginTop: "40px" }}>
        <h2 className="text-center mb-4">Boski Collection</h2>
        {!products.length ? (
          <div className="text-center">No Boski products found.</div>
        ) : (
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <Link to={`/boski/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card shadow-sm position-relative h-100">
                    <span className="badge bg-brown position-absolute" style={{ top: "10px", left: "10px", zIndex: 2 }}>
                      Sale
                    </span>
                    <span className="badge bg-secondary position-absolute" style={{ top: "10px", right: "10px", zIndex: 2 }}>
                      Boski
                    </span>
                    <img
                      src={product.imageurl}
                      alt={product.productName}
                      className="card-img-top"
                      style={{
                        objectFit: "contain",
                        height: "250px",
                        borderRadius: "8px 8px 0 0",
                        background: "#f8f9fa"
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.productName}</h5>
                      {/* Only show description if it exists */}
                      {product.description && (
                        <p className="card-text mb-2">{product.description}</p>
                      )}
                      <div className="mt-auto">
                        <div>
                          <span className="text-muted" style={{ textDecoration: "line-through" }}>
                            Rs.{product.price.toLocaleString()} PKR
                          </span>
                        </div>
                        <div>
                          <span className="fw-bold fs-5 text-danger">
                            Rs.{product.saleprice.toLocaleString()} PKR
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
      {/* Extra CSS for brown badge */}
      <style>
        {`
          .bg-brown {
            background-color:rgb(94, 93, 93) !important;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

export default Boski;