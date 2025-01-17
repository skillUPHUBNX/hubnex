import { star } from "@/constant";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
    return (
        <div className=" flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 pb-28" >
            <div className="border rounded-full py-1 px-2 flex items-center justify-center gap-2 flex-wrap  tracking-wider">
                <div className="bg-black text-white px-4 py-1 rounded-full text-sm sm:text-base whitespace-nowrap tracking-wider">Be our partner</div>
                <div className="text-black text-sm sm:text-base  flex gap-2 items-center whitespace-nowrap">
                    Check out to invest in our success <ArrowRight />
                </div>
            </div>
            <h1
                className="font-bold text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] md:text-[60px] md:leading-[72px] lg:text-[72px] lg:leading-[89px] my-6 sm:my-8"
            >
                High-performing remote teams.
                <br />
                The future of work.
            </h1>


            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed  ">
                Powerful, self-serve team engagement tools and analytics. Supercharge your<br /> managers & keep employees engaged from anywhere.
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

            <div className="flex items-center justify-center gap-4">
                <Button variant="blue">
                    <div className="flex items-center gap-2">
                        Connect us
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
    );
}
