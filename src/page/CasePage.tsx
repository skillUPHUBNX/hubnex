import Company from "@/components/Company";
import PageNavigation from "@/components/PageNavigation";
import Community from "@/components/Community";
import Testimonial from "@/components/Testimonial";
import { caseBreadcrumbs, } from "@/constant";
import "@/index.css"
import Blog from "@/components/Blogs/Blog";
import BlueHero from "@/components/BlueHero";
import CaseHero from "@/components/Case/CaseHero";


export default function CasePage() {
  return (
    <div>
        <PageNavigation breadcrumbs={caseBreadcrumbs}/>
        <CaseHero/>
    
        <div className="bg-[#F5F5F7] my-14">
        <Community/>
        </div>
    
        <Company/>
    
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
