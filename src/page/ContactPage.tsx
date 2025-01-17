import BlueHero from "@/components/BlueHero";
import ContactFrom from "@/components/Contact/ContactFrom";
import PageNavigation from "@/components/PageNavigation";
import { contactBreadcrumbs } from "@/constant";

export default function ContactPage() {
    return (
        <div>
          <PageNavigation breadcrumbs={contactBreadcrumbs} />
           <ContactFrom/>
          <BlueHero />
        </div>
      )
}
