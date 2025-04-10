"use client";

// import node module libraries
import { Fragment } from "react";

// import layouts
import FooterWithLinks from "layouts/marketing/footers/FooterWithLinks";
import NavbarHelpCenter from "layouts/marketing/navbars/help-center/NavbarHelpCenter";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import Footer from "layouts/marketing/footers/Footer";

export default function HelpCenterLayout({ children }) {
  return (
    <Fragment>
      <NavbarHelpCenter bg="white" />
      <main className="bg-white">{children}</main>
      {/* <FooterWithLinks /> */}
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
}
