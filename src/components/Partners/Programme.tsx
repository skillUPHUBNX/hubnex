import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";


export default function Programme() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-8 md:py-12">
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/blue2.png"
                alt="Hero"
                className="w-full"
              />
            </div>
    
            {/* Content Section */}
            <div className="space-y-6 px-4 lg:px-8 flex flex-col">
              <h1 className="font-bold text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[38px] lg:leading-[62px]">
              Join our Preferred Partners Programme
              </h1>
              <p className="font-normal text-sm sm:text-base md:text-lg  leading-relaxed">
              We proudly offer exclusive benefits to our partners who have consistently shown trust in our platform and delivered outstanding work.These privileges are designed to ensure business stability and promise up to 3x returns to our partners.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                
                <Button variant="blue">
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
