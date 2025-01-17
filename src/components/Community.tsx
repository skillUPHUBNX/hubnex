import ArticleSlider from "./ArticleSlider";

export default function   Community() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-[40%,60%] gap-8">
          {/* Content Section */}
          <div className="space-y-7 flex flex-col">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl  leading-tight sm:leading-snug">
              Case studies for the community
            </h1>
            <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
          </div>

          {/* Card Slider Section */}
          <div className="flex justify-center">
            <ArticleSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
