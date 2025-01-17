import { SearchCheck } from "lucide-react";

// Define the type for each Service
interface Benefits {
    text: string;
    label: string;
  }
  
  // Define the props for the component
  interface BenefitsCardProps {
    benefit: Benefits;
  }


    const BenefitsCard: React.FC<BenefitsCardProps> = ({ benefit }) => {
  return (
    <div className=" my-6 shadow-md p-8 bg-white rounded-3xl flex gap-2">
       <div className="">
       <SearchCheck className="text-blue-500 w-8  h-8" />
       </div>
      <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
       <span className="font-bold">{benefit.label}: </span> {benefit.text}
      </p>
    </div>
  )
}

export default BenefitsCard
