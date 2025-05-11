// import sub components

import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import ViewProfile from "./Index";
import getFetch from "helper/getFetch";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import Footer from "layouts/marketing/footers/Footer";

export const metadata = {
  title: "Instructor Profile | Editors Academy",
  description: "Instructor Profile | Editors Academy",
};

const Page = async () => {
  const { instructor } = await getFetch(
    "https://api.editors.academy/courses/1/instructors"
  );
  console.log("======================");
  console.log(instructor);

  console.log("======================");
  return (
    <>
      {/* <NavbarDefault  /> */}
      <NavbarDefault login />

      <ViewProfile instructor={instructor} />
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </>
  );
};

export default Page;
