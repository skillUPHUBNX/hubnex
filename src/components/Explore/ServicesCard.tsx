// Define the type for each Service
interface Services {
  image: string;
  label: string;
  text: string;
  link: string;
}

// Define the props for the component
interface ServicesCardProps {
  service: Services;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  return (
    <div className="space-y-7 my-6">
      <img src={service.image} alt={service.label} className=" h-auto" />
      <h2 className="font-bold text-xl sm:text-2xl md:text-2xl  leading-tight">
        {service.label}
      </h2>
      <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        {service.text}
      </p>
    </div>
  );
};

export default ServicesCard;
