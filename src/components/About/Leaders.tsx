import Slider from "react-slick";
import { meets } from "@/constant";
import AboutCard from "./AboutCard";

const Blog = () => {
  const settings = {
    dots: true, // Enables dots for navigation
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: "custom-dots", // Custom class for styling dots
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1440, // Desktop
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots-container">{dots}</div>
    ),
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 text-center">
      {/* Service heading */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
          Meet the leaders driving it all
        </h1>
        <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-500">
          Spearheading a team of 250+ Xpanders committed to delivering<br/> exceptional tech solutions.
        </p>
      </div>

      {/* Slider */}
      <div>
        <Slider {...settings}>
          {meets.map((meet, index) => (
            <div key={index}>
              <AboutCard meet={meet} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
