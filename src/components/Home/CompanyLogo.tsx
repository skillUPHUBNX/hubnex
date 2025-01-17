
export default function CompanyLogo() {
    return (
      <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 mb-28">
        <h1 className="text-[21px] leading-[24px] font-bold text-gray-500 mb-8">
          Join 4,000+ companies already growing
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <img src="/logo/4.png" alt="Company Logo 1" className="mx-auto" />
          <img src="/logo/5.png" alt="Company Logo 2" className="mx-auto" />
          <img src="/logo/6.png" alt="Company Logo 3" className="mx-auto" />
          <img src="/logo/7.png" alt="Company Logo 4" className="mx-auto" />
          <img src="/logo/8.png" alt="Company Logo 5" className="mx-auto" />
        </div>
      </div>
    );
  }
  
