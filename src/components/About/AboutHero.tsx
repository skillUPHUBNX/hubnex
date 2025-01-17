import { star, about_texts } from "@/constant";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";



export default function AboutHero() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 sm:py-6 md:py-8 lg:py-12 xl:py-16" >

                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl  leading-tight sm:leading-snug my-6 ">
                We’re empowering businesses with the technology they<br/> need to lead change and innovate in a business<br/> landscape that waits for no one.
                </h1>

                <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed  ">
                Powerful, self-serve team engagement tools and analytics. Supercharge your<br/> managers & keep employees engaged from anywhere.
                </p>

                <div className="flex items-center flex-col mb-4 lg:flex-row md:flex-row justify-center gap-8 mt-8">
                    <div className="flex items-center">
                        {star.map((s, i) => (
                            <img key={i} src={s.image} alt="star" />
                        ))}
                    </div>
                    <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#737373] leading-snug">
                        4.5 (from 200+ reviews)
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 pb-20">
                    <Button variant="blue">
                        <div className="flex items-center gap-2">
                            Connect Sales
                            <ArrowRight />
                        </div>
                    </Button>
                    <Button variant="outline">
                        <div className="flex items-center gap-2">
                        Join Us
                            <ArrowRight />
                        </div>
                    </Button>
                </div>
            </div>


            <div className="mb-20">
                {about_texts.map((text, i) => (
                    <div
                        key={i}
                        className="mt-8"
                    >
                        <h1
                            className="text-2xl sm:text-3xl md:text-4xl  leading-tight sm:leading-snug md:leading-snug lg:leading-relaxed font-bold mb-4 sm:mb-6"
                        >
                            {text.title}
                        </h1>
                        <p
                            className="text-base sm:text-lg md:text-[18px]  leading-relaxed sm:leading-relaxed md:leading-loose mb-4 sm:mb-6 text-gray-500"
                        >
                            {text.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
