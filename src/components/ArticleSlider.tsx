import Slider from "react-slick"; // Assuming you're using react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { article } from "@/constant";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";



// SimpleSlider Component to render the slider
const SimpleSlider: React.FC<{ settings: object }> = ({ settings }) => {
  return (
    <Slider {...settings}>
      {article.map((slider, index) => (
        <div key={index} className="bg-white flex gap-4 rounded-2xl overflow-hidden">
          <Card>
            <CardHeader>
              <img src={slider.image} alt="Hero" className="w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-bold text-[14px] leading-[18px]">{slider.label}</h4>
              <p className="text-sm">{slider.text}</p>
            </CardContent>
            <CardFooter className="pb-4">
              <Link to={slider.link} className="flex items-center gap-2">
                <span className="font-bold text-[14px] leading-[15px]">
                  {slider.link}
                </span>
                <MoveUpRight className="text-sm" /> {/* Apply text-sm for smaller font size */}
              </Link>

            </CardFooter>
          </Card>
        </div>


      ))}
    </Slider>
  );
};

// Parent Component
const ArticleSlider: React.FC = () => {
  const settings = {
    dots: true, // Enables dots for navigation
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: "custom-dots", // Custom class for styling dots
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
    ],
    appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>, // Ensures only dots are shown
  };


  return (
    <div className="container mx-auto ">
      <SimpleSlider settings={settings} />
    </div>
  );
};

export default ArticleSlider;

