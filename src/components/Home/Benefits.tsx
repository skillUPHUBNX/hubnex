import { benefits } from "@/constant"
import BenefitsCard from "./BenefitsCard"

const Benefits = () => {
  return (
    <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-16">
    {/* service heading */}
    <div className="flex flex-col items-center justify-center pb-9 text-left md:text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-[40px]  leading-tight mb-4">
        Benefits to Join Hubnex Labs
        </h1>
    </div>

    {/* services card */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
            <BenefitsCard key={index} benefit={benefit} />
        ))}
    </div>
</div>
  )
}

export default Benefits
