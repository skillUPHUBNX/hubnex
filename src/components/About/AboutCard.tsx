import { Link } from "react-router-dom";

// Define the type for each BlogCard
interface Blog {
  image: string;
  label: string;
  des: string;
  dec: string;
  link: string;
  linkLabel: string;
}

// Define the props for the component
interface BlogCardProps {
  meet: Blog;
}

const AboutCard: React.FC<BlogCardProps> = ({ meet }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 overflow-hidden items-center md:items-start">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img src={meet.image} alt={meet.label} className="w-full h-auto object-cover rounded-lg" />
      </div>

      {/* Content Section */}
      <div className="space-y-4 text-center md:text-left md:w-2/3">
        <h1 className="font-bold text-[20px] md:text-[30px] leading-[28px] md:leading-[35px]">
          {meet.label}
        </h1>
        <p className="font-normal text-[12px] md:text-[14px] leading-[16px] md:leading-[18px]">
          {meet.des}
        </p>
        <p className="font-light text-[14px] md:text-[18px] leading-[20px] md:leading-[25px]">
          {meet.dec}
        </p>
        <p className="text-blue-600 text-[14px] md:text-[15px] underline">
        <Link to={meet.link} className="">
          {meet.linkLabel}
        </Link>
        </p>
       
      </div>
    </div>
  );
};

export default AboutCard;

