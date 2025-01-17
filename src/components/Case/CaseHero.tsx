import { Card, caseIcon, Impact, stats, texts } from "@/constant";


export default function CaseHero() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content Section */}
                <div className="space-y-10 flex flex-col justify-center">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl  leading-snug">
                    How cybersecurity solutions helped an insurance company
                    </h1>
                    <p className="font-normal text-sm sm:text-base  leading-relaxed">
                    Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page. 
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        {caseIcon.map((item, index) => (
                            <div key={index} className="flex flex-row items-start gap-4">
                                <div className="bg-[#ECF1FF] px-4 py-4 rounded-full">
                                    <img src={item.imgSrc} alt={item.imgAlt} />
                                </div>
                                <div>
                                    <h4 className="text-blue-700 text-base font-medium">{item.title}</h4>
                                    <p className="text-gray-500 text-sm font-normal">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <h1 className="font-extrabold text-3xl md:text-4xl  text-blue-600">
                                    {stat.percentage}
                                </h1>
                                <p
                                    className="font-medium text-sm md:text-base"
                                    dangerouslySetInnerHTML={{ __html: stat.description }}
                                ></p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end ">
                    <img
                        src="/case-icon/hero.png"
                        alt="Hero"
                        className="max-w-full h-auto object-contain rounded-md"
                    />
                </div>
            </div>


            <div className="">
                {texts.map((text, i) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Card.map((cardInfo, i) => (
                    <div
                        key={i}
                        className="space-y-7 my-6 bg-white rounded-lg p-6 border border-[#2552EA] hover:bg-blue-600 hover:text-white group transition-all duration-300"
                    >
                        <span
                            className="bg-[#BBDEFB] text-[#1976D2] px-2 py-2 font-bold text-xs sm:text-sm rounded-sm transition-all duration-300 group-hover:bg-white group-hover:text-blue-600"
                        >
                            {cardInfo.id}
                        </span>
                        <h2
                            className="font-bold text-lg leading-6 sm:text-xl sm:leading-7 group-hover:text-white transition-all duration-300"
                        >
                            {cardInfo.label}
                        </h2>
                        <p
                            className="font-normal text-sm leading-5 group-hover:text-white transition-all duration-300"
                        >
                            {cardInfo.text}
                        </p>
                    </div>

                ))}
            </div>

            <div className="">
                <div className="mt-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  leading-tight sm:leading-snug md:leading-snug lg:leading-relaxed font-bold mb-4 sm:mb-6">
                        Impact
                    </h1>
                    <p className="text-base sm:text-lg md:text-[18px]  leading-relaxed sm:leading-relaxed md:leading-loose mb-4 sm:mb-6 text-gray-500">
                        We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.
                    </p>
                </div>

                <div className="my-14">
                    {Impact.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6 md:gap-8 mb-12"
                        >
                            <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-blue-600">
                                {item.per}
                            </h1>
                            <div className="flex-1">
                                <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-[30px] md:leading-snug">
                                    {item.title}
                                </h1>
                                <p className="text-base sm:text-lg md:text-[18px]  leading-relaxed sm:leading-relaxed md:leading-loose mb-4 sm:mb-6 text-gray-500">
                                    {item.des}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl  leading-tight sm:leading-snug md:leading-snug lg:leading-relaxed font-bold mb-4 sm:mb-6">
                    Conclusion
                    </h1>
                    <p className="text-base sm:text-lg md:text-[18px]  leading-relaxed sm:leading-relaxed md:leading-loose mb-4 sm:mb-6 text-gray-500">
                    We continue to deliver robust cybersecurity solutions to their team to mitigate cyber risks and enhance cyber resilience in the insurance industry. We hope leveraging our cybersecurity solution helps the client stand true to their commitment to their customers on delivering a secure and resilient digital future with them.
                    </p>
                </div>
            </div>


        </div>
    );
}
