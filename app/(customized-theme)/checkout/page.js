import React from "react";

import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import Checkout from "./Index";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import Footer from "layouts/marketing/footers/Footer";
// import { Footer1 } from "./_docs/snippet/footers/components/Footer1";
// import Footer from "layouts/marketing/footers/Footer";

const page = () => {
  return (
    <>
      <NavbarDefault login />
      <main>
        <Checkout />
      </main>
      {/* Footer section */}
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </>
  );
};

export default page;
