import React, { useState, useEffect } from "react";
import "./section1.scss";

import pizza1 from './assets/pizza1.jpg';
import pizza2 from './assets/pizza2.jpg';
import pizza3 from './assets/pizza3.jpg';
import logo from './assets/logo.png';

function Section1() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 7000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const slides = [pizza1, pizza2, pizza3];
    const totalSlides = slides.length;

    console.log("currentSlide:", currentSlide);

    return (
        <section>
            <div className="carousel__container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel__content ${index === currentSlide ? "active" : ""}`}
                        style={{
                            backgroundImage: `url(${slide})`
                        }}
                    >
                        <div className="carousel__inner">
                            <div className="carousel__inner__content">

                                <div className="carousel_inner__content__top">
                                    <h1>CITY</h1>
                                    <img src={logo} alt="Logo" style={{ width: "120px", height: "120px" }} />
                                    <h1>PIZZA</h1>
                                </div>

                                <div className="carousel_inner__content__mid"><h3>Od ponad 40 lat nasza firma dostarcza autentyczne doświadczenie kulinarnej podróży przez wykwintne smaki miast z całego świata. Rodzinny biznes założony przez DiMarco oferuje szeroki wybór smaków - od klasycznych po eksperymentalne kombinacje. <br />Poznaj historię, kulturę i niezapomniany smak metropolii w jednym kęsie - odwiedź nas <br />i poznaj prawdziwą jakość. </h3>
                                </div>

                                <div className="carousel_inner__content__bottom">
                                    <h1>Odkryj smak metropolii!</h1>

                                    <button>Więcej o nas</button>
                                </div>
                            </div>

                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section1;
