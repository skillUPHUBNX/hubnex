import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Define the type for each breadcrumb
interface BreadcrumbItem {
  label: string;
  href?: string; // Optional, as the current page won't have a link
}

// Define the props for the component
interface PageNavigationProps {
  breadcrumbs: BreadcrumbItem[];
}

const PageNavigation: React.FC<PageNavigationProps> = ({ breadcrumbs }) => {
  return (
   <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4  lg:py-10">
     <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {breadcrumb.href ? (
                <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {/* Add a separator if it's not the last item */}
            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
   </div>
  );
};

export default PageNavigation;
