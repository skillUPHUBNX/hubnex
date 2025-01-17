import { companycounter } from "@/constant";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


export default function CompanyCounter() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
            {/* service heading */}
            <div className="flex flex-col items-center justify-center pb-9 text-center mb-16">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-6">
                We are big enough to deliver and small enough to care
                </h1>
                <p className="text-xl sm:text-lg   font-normal leading-relaxed lg:px-60 mb-4 text-gray-500">
                Teams large and small rely on Hubnex Labs
                </p>
                <Button variant="outline" className="bg-white">
              <div className="flex items-center gap-2">
              Connect Sales
                <ArrowRight />
              </div>
            </Button>
            </div>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companycounter.map((c,i) => (
                     <div key={i} className="space-y-4 my-6  p-6">
                    
                     <h1 className="font-extrabold text-[40px] leading-[52px] text-blue-600">{c.digit}</h1>
                     <h2 className="font-bold text-xl sm:text-2xl md:text-3xl  leading-tight">{c.label}</h2>
                     <p className="">{c.text}</p>
                   </div>
                ))}
            </div>
        </div>
  )
}
