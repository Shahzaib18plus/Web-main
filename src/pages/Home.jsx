import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mainImage1 from "../assets/Main Page Image1.png";
import mainImage2 from "../assets/Main Page Image2.png";
import mainImage3 from "../assets/Main Page Image3.png";

const Home = () => {
    return (
        <>
            <Hero />
            <Header />
            <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={mainImage1} className="d-block w-100" alt="Main Collection" />
                        <div className="carousel-content">
                            <div className="content-wrapper">
                                <h1>Welcome to Illume Libaas</h1>
                                <p>Discover our exclusive collection</p>
                                <a href="#" className="btn btn-light btn-lg shop-now-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={mainImage2} className="d-block w-100" alt="Winter Collection" />
                        <div className="carousel-content">
                            <div className="content-wrapper">
                                <h1>Winter Collection 2024</h1>
                                <p>Explore our cozy winter wear</p>
                                <a href="#" className="btn btn-light btn-lg shop-now-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={mainImage3} className="d-block w-100" alt="Special Offers" />
                        <div className="carousel-content">
                            <div className="content-wrapper">
                                <h1>Special Offers</h1>
                                <p>Up to 50% off on selected items</p>
                                <a href="#" className="btn btn-light btn-lg shop-now-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="cart-link">
                <Link to="/cart" className="nav-link text-light me-2">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="visually-hidden">Cart</span>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Home;
