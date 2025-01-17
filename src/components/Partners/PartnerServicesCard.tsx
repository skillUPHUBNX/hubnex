import { ChevronsRight } from "lucide-react";

// Define the type for each Service
interface Services {
  image: string;
  label: string;
  text: string;
  step: string;
}

// Define the props for the component
interface ServicesCardProps {
  service: Services;
}

const PartnerServicesCard: React.FC<ServicesCardProps> = ({ service }) => {
  return (
    <div className="flex flex-col gap-y-7  text-center bg-white rounded-xl p-10 leading-loose">
      {service.step !== "Step 4" ? (
        <div className="flex items-center justify-center font-extrabold">
          <ChevronsRight className="" />
        </div>
      ):(
        <div className="mb-4"></div>
      )}

      <img src={service.image} alt={service.label} className=" mx-auto" />
      <div className="flex items-center justify-center ">
        <p className="border-black border rounded-full  px-3 py-2">{service.step}</p>
      </div>
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl  leading-tight">
        {service.label}
      </h2>
      <p className="font-normal text-sm sm:text-base md:text-lg  leading-relaxed xl:px-32">
        {service.text}
      </p>
    </div>
  );
};

export default PartnerServicesCard;
