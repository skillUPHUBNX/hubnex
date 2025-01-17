import Benefits from "@/components/Home/Benefits";
import Blog from "@/components/Blogs/Blog";
import BlueHero from "@/components/BlueHero";
import Community from "@/components/Community";
import Company from "@/components/Company";
import CompanyLogo from "@/components/Home/CompanyLogo";
import HomeHero from "@/components/Home/HomeHero";
import Partner from "@/components/Partners/Partner";
import Testimonial from "@/components/Testimonial";
import CompanyCounter from "@/components/Home/CompanyCounter";


export default function HomePage() {
  return (
    <div>
      <div className="bg-cover bg-no-repeat" style={{
        backgroundImage: 'url("/hero/second.gif"), url("/hero/Circle.png")',
        backgroundPosition: 'left bottom, right center',  // Left for first image and Right for second image
        backgroundSize: 'contain, contain'  // Adjust size for both images
      }}  >
        <HomeHero />
      </div>
      <CompanyLogo />
      <div className="bg-[#F5F5F7] my-14">
        <Benefits />
      </div>
      <Partner />
      <div className="bg-[#F5F5F7] my-14">
        <Community />
      </div>
      <Company/>

      <CompanyCounter/>
      <div className="bg-[#F5F5F7] my-14">
        <Testimonial/>
        </div>
        <div className="bg-[#F5F5F7] my-14">
        <Blog/>
        </div>
      <BlueHero/>


    </div>
  )
}
