import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Learner from "./Learner";

export default function BlueHero() {
  return (
    <div className="text-white mt-12 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-blue-700 rounded-[40px] px-8 py-8 ">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="/blue.png"
            alt="Hero"
            className="w-full"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 px-4 lg:px-8 flex flex-col justify-center">
          <h1 className="font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[52px] lg:leading-[62px]">
            Increase your sales revenue by 32% using Hubnex Labs.
          </h1>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus.”
          </p>
          <Learner />
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
            <Button variant="bluecard" className="py-8 px-8">
              <div className="flex items-center gap-2">
                Join Us
                <ArrowRight />
              </div>
            </Button>
            <Button variant="bluecard2"  className="py-8 px-8">
              <div className="flex items-center gap-2">
                Contact Us
                <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
