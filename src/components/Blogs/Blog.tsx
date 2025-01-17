import Slider from "react-slick";
import BlogCard from "./BlogCard";
import { blogs } from "@/constant";

const Blog = () => {
  const settings = {
    dots: true, // Enables dots for navigation
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "custom-dots", // Custom class for styling dots
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 1440, // Desktop
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots-container">{dots}</div>
    ),
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16">
      {/* Service heading */}
      <div className="flex flex-col items-start justify-start mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl  leading-tight mb-6">
          Blog posts for the community
        </h1>
        <p className="font-normal text-base sm:text-lg md:text-xl  leading-relaxed mb-4">
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        </p>
      </div>

      {/* Slider */}
      <div>
        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
