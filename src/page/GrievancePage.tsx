import BlueHero from "@/components/BlueHero";
import GrievanceText from "@/components/Grievance/GrievanceText";
import PageNavigation from "@/components/PageNavigation";
import {  grievanceBreadcrumbs } from "@/constant";


export default function GrievancePage() {
    return (
        <div>
          <PageNavigation breadcrumbs={grievanceBreadcrumbs} />
            <GrievanceText/>
          <BlueHero />
        </div>
      )
}
