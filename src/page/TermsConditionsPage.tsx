import BlueHero from "@/components/BlueHero";
import TermsText from "@/components/TermsConditions/TermsText";
import PageNavigation from "@/components/PageNavigation";
import {  termsBreadcrumbs } from "@/constant";


export default function TermsConditionsPage() {
    return (
        <div>
          <PageNavigation breadcrumbs={termsBreadcrumbs} />
            <TermsText/>
          <BlueHero />
        </div>
      )
}


