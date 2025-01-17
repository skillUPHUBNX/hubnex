import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogHero() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="space-y-2">
                <p className="text-[18px] leading-[30px] text-gray-500">#Business</p>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
                    What is Delivery Management and Why Does It Matter?
                </h1>
                <p className="text-[18px] leading-[30px] text-gray-500">July 19, 2024 | By <span className="font-medium">Author Name</span></p>
            </div>
            <div className="py-16 grid grid-cols-1 lg:grid-cols-[70%,30%] gap-8">
                {/* Content Section */}
                <div className="space-y-7 flex flex-col justify-start items-start">
                    <h1 className="text-[20px] sm:text-[24px] leading-[30px] font-bold">Policy Details</h1>
                    <p className="text-[16px] sm:text-[18px] leading-[30px] text-gray-500">
                        You shall also receive an alphanumerical/numerical identification number for tracking your grievances
                        with the customer care. We assure You that ExMyB will make all reasonable endeavours to address the
                        grievance made by You at the latest within 60 (Sixty) days from the date of receipt of the grievance.
                    </p>
                    <h1 className="text-[20px] sm:text-[24px] leading-[30px] font-bold">
                        Governance Framework
                    </h1>
                    <p className="text-[16px] sm:text-[18px] leading-[30px] text-gray-500">
                        You shall also receive an alphanumerical/numerical identification number for tracking your grievances
                        with the customer care. We assure You that ExMyB will make all reasonable endeavours to address the
                        grievance made by You at the latest within 60 (Sixty) days from the date of receipt of the grievance.
                    </p>
                    <p className="text-[16px] sm:text-[18px] leading-[30px] text-gray-500">
                        A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer
                        care team or <span className="font-bold">where You fail to respond to the response received from the customer care team within 7 (Seven) days.</span>
                        A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer
                        care team or <span className="font-bold">where You fail to respond to the response received from the customer care team within 7 (Seven) days.</span>
                        A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer
                        care team or <span className="font-bold">where You fail to respond to the response received from the customer care team within 7 (Seven) days.</span>
                        A grievance will be treated as closed if You communicate Your acceptance of the response received from the customer
                        care team or <span className="font-bold">where You fail to respond to the response received from the customer care team within 7 (Seven) days.</span>
                    </p>
                </div>

                {/* Image Section */}
                <div className="bg-no-repeat  bg-cover flex flex-col justify-end items-end relative min-h-[800px]"
                    style={{ backgroundImage: 'url("/Ad-Banner.png")' }}>
                    <div className="absolute bottom-8 left-0 space-y-2 w-full px-4 sm:px-6 lg:px-8">
                        <div className="space-y-2">
                            <img src="/small-logo.png" alt="Logo" className="w-8 h-8" />
                            <p className="text-[12px] sm:text-[14px] leading-[16px] text-white">Work better, together</p>
                            <h1 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[30px] font-bold text-white">
                                Get Evaluate Your <br /> Business Score!
                            </h1>
                        </div>
                        <div className="px-2">
                            <Button variant="outline" className="w-full border-none">
                                <div className="flex items-center gap-2 text-[#006D4B]">
                                    Check Now
                                    <ArrowRight />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
