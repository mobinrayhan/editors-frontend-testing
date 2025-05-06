import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <NavbarDefault login />
      <main>{children}</main>
      <Footer1 bgColor="bg-light" />

      <Footer bgColor="bg-light" />
    </>
  );
};

export default layout;
