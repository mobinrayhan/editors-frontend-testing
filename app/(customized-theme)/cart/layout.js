import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <NavbarDefault login />
      <main>{children}</main>
      <Footer bgColor="bg-light" />
    </>
  );
};

export default layout;
