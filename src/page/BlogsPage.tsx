import Company from "@/components/Company";
import BlogHero from "@/components/Blogs/BlogHero";
import PageNavigation from "@/components/PageNavigation";
import Testimonial from "@/components/Testimonial";
import { blogsBreadcrumbs } from "@/constant";
import "@/index.css"
import Blog from "@/components/Blogs/Blog";
import BlueHero from "@/components/BlueHero";


export default function BlogsPage() {
  return (
    <div>
        <PageNavigation breadcrumbs={blogsBreadcrumbs}/>
        <BlogHero/>
        <div className="bg-[#F5F5F7] my-14">
        <Blog/>
        </div>
        <Company/>
        <div className="bg-[#F5F5F7] my-14">
        <Testimonial/>
        </div>
      <BlueHero/>
    </div>
  )
}
