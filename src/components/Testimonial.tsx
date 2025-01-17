import React, { useEffect, useState } from "react";
import { testimonials } from "@/constant";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick"; // Assuming you're using react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomPrevArrow: React.FC<any> = ({ onClick, isVisible }) => {
  if (!isVisible) return null;
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        zIndex: 1000,
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <img src="/arrow/Arrow down-circle.png" alt="Previous" />
    </button>
  );
};

const CustomNextArrow: React.FC<any> = ({ onClick, isVisible }) => {
  if (!isVisible) return null;
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        border: "none",
        zIndex: 1000,
        cursor: "pointer",
        background: "transparent",
      }}
    >
      <img src="/arrow/Icon.png" alt="Next" />
    </button>
  );
};

const Testimonial = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots",
    appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
    prevArrow: <CustomPrevArrow isVisible={!isSmallScreen} />,
    nextArrow: <CustomNextArrow isVisible={!isSmallScreen} />,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
