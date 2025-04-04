// import node module libraries
import { Fragment } from "react";

// import sub components
import DefaultHome from "./(landings)/_landings/default-home/Index";

// import layouts
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

export const metadata = {
  title: "Welcome to Geeks UI Learning Application | Geeks Nextjs Template",
};

const Page = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarDefault />
      <main>
        <DefaultHome />
      </main>
      {/* Footer section */}
      <Footer bgColor="bg-light" />
    </Fragment>
  );
};

export default Page;
