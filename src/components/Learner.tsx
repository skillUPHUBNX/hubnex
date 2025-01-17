import NumberTicker from "@/components/ui/number-ticker";
import { personImages } from "@/constant";

const Learner = () => {
  return (
    <div className="flex flex-row  gap-4 items-center lg:items-start justify-center lg:justify-start">
      {/* Image Section */}
      <div className="relative flex w-24 items-center h-8 lg:h-0 lg:w-36  justify-start  ">
        {personImages.map((person) => (
          <img
            src={person.src}
            className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover ${person.className}`}
            key={person.alt}
            alt={person.alt}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="text-center lg:text-left flex flex-col items-start">
        <h1 className="font-bold text-black-100 text-sm md:text-base lg:text-lg">
          <NumberTicker value={456} className="text-black-100" />+ Companies
        </h1>
        <p className="text-black-100 text-xs md:text-sm lg:text-base whitespace-nowrap">
          joined to make their business success!
        </p>
      </div>
    </div>
  );
};

export default Learner;
