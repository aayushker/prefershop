import React from "react";
import Image from "next/image";
import "@/vendor/bootstrap/css/bootstrap.min.css";
import "@/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/vendor/glightbox/css/glightbox.css";
import "@/vendor/swiper/swiper-bundle.min.css";
import "@/vendor/aos/aos.css";
import "@/assests/main.css";

function Hero() {
    return (
        <>
            <section id="hero" className="hero">
                {/* <Image src="" alt="" data-aos="fade-in" width={100} height={100}/> */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Welcome to Our Website
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="200">
                                Let us help you select the right product, Effortlessly!
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <form
                                action="#"
                                className="sign-up-form d-flex"
                                autoComplete="on"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for the Product"
                                    autoComplete="additional-name"
                                />
                                <input
                                    type="submit"
                                    className="searchButton btn btn-primary"
                                    value="Search"
                                    id="searchButton"
                                />
                            </form>
                            <div className="result-box"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
