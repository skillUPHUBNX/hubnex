
import Community from "@/components/Community";
import Company from "@/components/Company";
import Hero from "@/components/Explore/Hero";
import PageNavigation from "@/components/PageNavigation";
import Services from "@/components/Explore/Services";
import WhyChooseUs from "@/components/Explore/WhyChooseUs";
import Testimonial from "@/components/Testimonial";
import { exploreBreadcrumbs } from "@/constant";
import "@/index.css"
import Blog from "@/components/Blogs/Blog";
import BlueHero from "@/components/BlueHero";


export default function ExplorePage() {
  return (
    <div>
        <PageNavigation breadcrumbs={exploreBreadcrumbs}/>
        <Hero/>
        <Services/>
        <div className="bg-[#F5F5F7] my-14">
        <WhyChooseUs />
        </div>
        <div className="bg-[#F5F5F7] my-14">
        <Community/>
        </div>
        <div className="bg-[#F5F5F7] my-14">
        <Company/>
        </div>
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
