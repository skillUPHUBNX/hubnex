
import BlueHero from "@/components/BlueHero";
import PrivacyText from "@/components/Privacy/PrivacyText";
import PageNavigation from "@/components/PageNavigation";
import {  privacyBreadcrumbs } from "@/constant";


export default function PrivacyPage() {
    return (
        <div>
          <PageNavigation breadcrumbs={privacyBreadcrumbs} />
            <PrivacyText/>
          <BlueHero />
        </div>
      )
}


