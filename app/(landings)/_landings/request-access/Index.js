"use client";

// import node module libraries
import { Fragment } from "react";

// import sub components
import Features2Columns from "./components/Features2Columns";
import TestimonialSection from "./components/TestimonialSection";

// import widget/custom components
import { CTAEarlyAccess, HeroFormCenter, LogosTopHeadingOffset } from "widgets";

// import required data files
import LogoList2 from "data/clientlogos/LogoList2";

const RequestAccess = () => {
  return (
    <Fragment>
      {/* Hero section with center form */}
      <HeroFormCenter
        badgeText='<span className="fw-bold">Beta-v2.0.0 </span> - Just shipped version'
        title="Request Access for Product"
        description="Geeks is a customizable, Bootstrap based UI Kits and Templates for Developers."
        promotionalText='Rated 5 Stars <span className="text-muted">by over</span> <span className="text-primary"> 100+ Users</span>'
      />

      <HeroFormCenter />

      {/* Brand logo section */}
      <LogosTopHeadingOffset limit={4} offset={2} logos={LogoList2} />

      {/* Features : Out of the box */}
      <Features2Columns />

      {/* Testimonial slider section */}
      <TestimonialSection />

      {/* Hero section with left form */}
      <CTAEarlyAccess />
    </Fragment>
  );
};

export default RequestAccess;
