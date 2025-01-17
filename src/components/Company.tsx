import { logo, star } from "@/constant";
import Learner from "./Learner";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Company() {
  return (
    <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 mb-16">
      <div className="flex items-center flex-col mb-4 lg:flex-row md:flex-row justify-center gap-8 mt-8">
        {logo.map((img, i) => (
          <img key={i} src={img.image} alt="logo" />
        ))}
      </div>

      <h1 className="font-bold text-2xl sm:text-3xl md:text-[40px]  leading-tight sm:leading-snug my-8">
        Start building high performing
        <br /> website & grow your business fast.
      </h1>

      <Learner />

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

      <Button variant="blue">
        <div className="flex items-center gap-2">
          Connect Sales
          <ArrowRight />
        </div>
      </Button>
    </div>
  );
}
