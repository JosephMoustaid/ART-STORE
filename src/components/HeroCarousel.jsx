import React, { useState, useEffect } from "react";
import carouselImg1 from "../assets/images/carousel1.png";
import carouselImg2 from "../assets/images/carousel2.png";
import carouselImg3 from "../assets/images/carousel3.png";
import carousel3 from "../assets/carousel/3.png";
import carousel4 from "../assets/carousel/4.png";

const HeroCarousel = () => {
  const slides = [
    {
      title: "Where Creativity Meets Canvas",
      subtitle:
        "Step into a world where creativity knows no bounds and imagination takes center stage.",
      buttonLabel: "DISCOVER NOW",
      image: carousel4,
    },
    {
      title: "Unleash Your Inner Artist",
      subtitle:
        "Let your imagination run wild with vibrant colors and endless possibilities.",
      buttonLabel: "EXPLORE ART",
      image: carousel3,
    },
    {
      title: "A Journey Into Creativity",
      subtitle:
        "Transform your space into a masterpiece that tells your unique story.",
      buttonLabel: "GET STARTED",
      image: carouselImg3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="hero-carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${currentSlide === index ? "active" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-overlay d-flex justify-content-start text-start">
              <div className="carousel-text text-black">
                <h1 className="mb-3">{slide.title}</h1>
                <p className="mb-4">{slide.subtitle}</p>
                <a href="#" className="carousel-button rounded-0">
                  {slide.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control prev " onClick={handlePrev}>
          &#8249;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
