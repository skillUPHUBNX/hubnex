
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="flex justify-center">
                    <img src="/hero1.png" alt="Hero" className="w-full" />
                </div>

                {/* Content Section */}
                <div className="space-y-7 lg:px-12 flex flex-col justify-center">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                        Understand Software Testing with Better Reports
                    </h1>
                    <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis
                        ipsum, facilisi odio pellentesque bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum
                        viverra tempus.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel
                        hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”
                    </p>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <div className="flex items-center gap-2">
                                Contact Us
                                <ArrowRight />
                            </div>
                        </Button>
                        <Button variant="blue">
                            <div className="flex items-center gap-2">
                                Join Us
                                <ArrowRight />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Content Section */}
                <div className="space-y-7 flex flex-col justify-center">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                        Ensure Flawless Flow of Software Testing
                    </h1>
                    <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                        As one of the leading software testing companies globally, Amantya offers exceptional software testing and QA services for various web and mobile applications, enabling our clients to deliver high-quality products. By aligning with your business objectives and focusing on ROI, we leverage our manual and automated testing expertise.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img src="/hero2.png" alt="Hero" className="max-w-full" />
                </div>
            </div>
        </div>
    );
}
