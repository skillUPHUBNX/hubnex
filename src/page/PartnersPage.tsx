import Blog from "@/components/Blogs/Blog";
import BlueHero from "@/components/BlueHero";
import Company from "@/components/Company";
import PartnerHero from "@/components/Partners/PartnerHero";
import PageNavigation from "@/components/PageNavigation";
import Partner from "@/components/Partners/Partner";
import Programme from "@/components/Partners/Programme";
import PartnerServices from "@/components/Partners/PartnerServices";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/Explore/WhyChooseUs";
import { partnerBreadcrumbs } from "@/constant";
import "@/index.css"



export default function PartnersPage() {
  return (
    <div>
      <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <PageNavigation breadcrumbs={partnerBreadcrumbs} />
        {/* First Image */}
        <div className="circle2"></div>
        {/* Second Image with Zoom Effect */}
        <div className="circle" ></div>
        {/* PartnerHero Component */}
        <PartnerHero />
      </div>
      <div className="bg-[#F5F5F7] ">
        <WhyChooseUs />
      </div>
      <Partner />
      <div className="bg-[#F5F5F7] my-14">
        <PartnerServices />
      </div>
      <Programme />
      <Company />
      <div className="bg-[#F5F5F7] my-14">
        <Testimonial />
      </div>
      <div className="bg-[#F5F5F7] my-14">
        <Blog />
      </div>
      <BlueHero />
    </div>
  )
}
