import { footerCompany, footerHelp, footerResources, socialimg } from "@/constant";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 w-full">
      <div className="mx-6 py-10  md:text-left">
        <div className=" flex-col lg:flex-row md:flex-row items-start   grid grid-cols-1 md:grid-cols-2  gap-8">
          {/* About Section */}
          <div className=" lg:w-96">
            <h6 className="mb-4 flex text-left  justify-start font-bold uppercase md:justify-start text-lg sm:text-xl">
              About Hubnex Labs
            </h6>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-200">
              We are a leading IT consultancy with expertise in innovative solutions for modern challenges. 
              Our client-centric approach enables us to design tailored solutions that keep businesses ahead 
              in the ever-evolving digital landscape.
            </p>
          </div>

        <div className="flex-col md:flex-row items-start justify-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Products Section */}
          <div className="flex flex-col items-start justify-center">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start text-lg sm:text-xl">
              Products
            </h6>
            {footerCompany.map((c, i) => (
              <Link key={i} to={c.link} className="mb-2 text-neutral-600 dark:text-neutral-200 text-sm sm:text-base">
                {c.label}
              </Link>
            ))}
          </div>

          {/* Help Section */}
          <div className="flex flex-col items-start justify-center">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start text-lg sm:text-xl">
              Help
            </h6>
            {footerHelp.map((c, i) => (
              <Link key={i} to={c.link} className="mb-2 text-neutral-600 dark:text-neutral-200 text-sm sm:text-base">
                {c.label}
              </Link>
            ))}
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-start justify-center">
            <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start text-lg sm:text-xl">
              Resources
            </h6>
            {footerResources.map((c, i) => (
              <Link key={i} to={c.link} className="mb-2 text-neutral-600 dark:text-neutral-200 text-sm sm:text-base">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-neutral-300 dark:border-neutral-600" />

      {/* Footer Bottom */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialimg.map((social, index) => (
            <img
              key={index}
              src={social.image}
              className="w-6 h-6 md:w-8 md:h-8"
              alt="social"
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200">
          © 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
