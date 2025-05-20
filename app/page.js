// import node module libraries
import { Fragment } from "react";

// import sub components
import DefaultHome from "./(landings)/_landings/default-home/Index";

// import layouts
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

import { Footer1 } from "./_docs/snippet/footers/components/Footer1";

export const metadata = {
  title: "Master the Art of Editing – From Basics to Pro Level",
  description:
    "Learn everything about video editing — from fundamental techniques to advanced skills. Whether you're a beginner or a seasoned editor, explore tips, tricks, and in-depth tutorials on cutting, color grading, transitions, effects, and more. Unlock your creativity and become a pro editor with practical insights and hands-on guidance.",
};

const Page = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarDefault login={false} />
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
