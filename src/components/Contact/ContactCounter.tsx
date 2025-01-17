import { contactImages } from "@/constant";
import NumberTicker from "../ui/number-ticker";

export default function ContactCounter() {
    return (
        <div className="flex items-center justify-center  h-full w-full">
        {/* Image Section */}
        <div className="relative flex  h-12 w-36 justify-center items-center">
          {contactImages.map((person) => (
            <img
              src={person.src}
              className={`w-8 h-8 rounded-full object-cover  ${person.className}`}
              key={person.alt}
              alt={person.alt}
            />
          ))}
        </div>
      
        {/* Content Section */}
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-black-100  text-2xl">
            <NumberTicker value={456} className="text-black-100" />+
          </h1>
        </div>
      </div>
      
    );
}
