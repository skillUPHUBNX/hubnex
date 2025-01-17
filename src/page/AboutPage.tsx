import Company from "@/components/Company";
import AboutHero from "@/components/About/AboutHero";
import PageNavigation from "@/components/PageNavigation";
import Leaders from "@/components/About/Leaders";
import Testimonial from "@/components/Testimonial";
import { aboutBreadcrumbs } from "@/constant";
import "@/index.css"
import BlueHero from "@/components/BlueHero";


export default function AboutPage() {
  return (
    <div>
        <PageNavigation breadcrumbs={aboutBreadcrumbs}/>
        <AboutHero/>
        <Leaders/>
        <Company/>
        <div className="bg-[#F5F5F7] my-14">
        <Testimonial/>
        </div>
        <div className="bg-[#F5F5F7] my-14">
        </div>
      <BlueHero/>
    </div>
  )
}
