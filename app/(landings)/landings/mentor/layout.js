"use client";

// import node module libraries
import { Fragment } from "react";

// import layouts
import FooterDark from "layouts/marketing/footers/FooterDark";
import NavbarMentorPages from "layouts/marketing/navbars/NavbarMentorPages";

export default function ReactequestAccessLayout({ children }) {
  return (
    <Fragment>
      {/*  Mentor Landing Page Navbar */}
      <NavbarMentorPages center />

      <main>{children}</main>

      {/* Dark Footer */}
      <FooterDark />
    </Fragment>
  );
}
