import { star } from "@/constant";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function PartnerHero() {
    return (
        <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 " >

            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug my-8">
                Join Our{" "}
                <span
                    className="bg-cover bg-no-repeat"
                    style={{ backgroundImage: 'url("/hero/Vector.png")', backgroundPosition: 'center', backgroundSize: 'contain' }}
                >
                    Partner
                </span>
                {" "}Network
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

            <div className="flex items-center justify-center gap-4 pb-28">
                <Button variant="blue">
                    <div className="flex items-center gap-2">
                        Connect Sales
                        <ArrowRight />
                    </div>
                </Button>
                <Button variant="outline">
                    <div className="flex items-center gap-2">
                        Connect Sales
                        <ArrowRight />
                    </div>
                </Button>
            </div>
        </div>
    );
}
