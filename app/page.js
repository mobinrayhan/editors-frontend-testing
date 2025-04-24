// import node module libraries
import { Fragment } from "react";

// import sub components
import DefaultHome from "./(landings)/_landings/default-home/Index";

// import layouts
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

import { Footer1 } from "./_docs/snippet/footers/components/Footer1";

export const metadata = {
  title: "Welcome to Geeks UI Learning Application | Geeks Nextjs Template",
};

const Page = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarDefault login />
      <main>
        <DefaultHome />
      </main>
      {/* Footer section */}
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
};

export default Page;
