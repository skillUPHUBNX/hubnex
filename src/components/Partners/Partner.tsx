

export default function Partner() {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20">
            <div className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Content Section */}
                <div className="space-y-10 flex flex-col justify-center">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                        Unleash the full power of
                        data
                    </h1>
                    <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed ">
                        We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.
                    </p>
                    <div className="flex flex-col md:flex-row  justify-between lg:space-y-0 space-y-5 ">
                        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center">
                            <h1 className="font-extrabold text-[40px] leading-[52px] text-blue-600">40+</h1>
                            <p className="font-medium text-[14px] leading-[20px]">Integrations</p>
                        </div>
                        <div className="flex flex-col    md:border-r-2 md:border-l-2  border-r-0 border-l-0  justify-center items-center px-8">
                            <h1 className="font-extrabold text-[40px] leading-[52px] text-blue-600">600%</h1>
                            <p className="font-medium text-[14px] leading-[20px]">Return on investment</p>
                        </div>
                        <div className="flex flex-col justify-end  text-center">
                            <h1 className="font-extrabold text-[40px] leading-[52px] text-blue-600">4k+</h1>
                            <p className="font-medium text-[14px] leading-[20px]">Global customers</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center py-8">
                        {/* Featured Text */}
                        <div className="flex justify-center items-center mb-4 md:mb-0">
                            <div className="font-medium text-[14px] text-center md:text-left">Featured in</div>
                        </div>

                        {/* Logos Section */}
                        <div className="flex flex-wrap md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
                            <img src="/logo/9.png" alt="Logo 4" className="w-18 h-auto " />
                            <img src="/logo/10.png" alt="Logo 5" className="w-18 h-auto " />
                            <img src="/logo/11.png" alt="Logo 6" className="w-18 h-auto " />
                        </div>
                    </div>

                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img src="/world.png" alt="Hero" className="max-w-full" />
                </div>
            </div>
        </div>
    );
}
