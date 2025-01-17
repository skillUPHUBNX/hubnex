import { partnerservices } from "@/constant"; // Ensure this is an array of Service objects
import PartnerServicesCard from "./PartnerServicesCard";

export default function PartnerServices() {
    return (
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12">
            {/* service heading */}
            <div className="flex flex-col items-center justify-center pb-9 text-left md:text-center">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]  leading-tight mb-6">
                How to get on board with us
                </h1>
            </div>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {partnerservices.map((service, index) => (
                    <PartnerServicesCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
}
