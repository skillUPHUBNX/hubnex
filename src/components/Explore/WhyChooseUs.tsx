import { whyChooseUsCard } from "@/constant"; 
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
            {/* service heading */}
            <div className="flex flex-col items-center justify-center pb-9 text-center">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]  leading-tight mb-6">
                    Why Choose Us?
                </h1>
                <p className="text-base sm:text-lg   font-normal leading-relaxed xl:px-80 mb-4">
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem  ipsumLorem ipsu
                </p>
            </div>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUsCard.map((card) => (
                    <WhyChooseUsCard key={card.id} cardInfo={card} />
                ))}
            </div>
        </div>
    );
}
