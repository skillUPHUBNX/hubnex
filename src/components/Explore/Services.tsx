import { services } from "@/constant"; // Ensure this is an array of Service objects
import ServicesCard from "./ServicesCard";

export default function Services() {
    return (
        <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-12">
            {/* service heading */}
            <div className="flex flex-col items-center justify-center pb-9 text-left md:text-center">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl  leading-tight mb-4">
                    Our Comprehensive IoT Services
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl font-normal leading-relaxed">
                    Our comprehensive IoT services encompass end-to-end solutions, including device development, data management, and system integration.
                </p>
            </div>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServicesCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
}
