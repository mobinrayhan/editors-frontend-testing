// import sub components

import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import ViewProfile from "./Index";
import getFetch from "helper/getFetch";

export const metadata = {
  title: "View Profile | Geeks Nextjs Template",
};

const Page = async ({ params }) => {
  const instructorData = await getFetch(
    `https://api.editors.academy/courses/${params?.profileId}/instructor`
  );
  return (
    <>
      {/* <NavbarDefault  /> */}
      <NavbarDefault login />

      <ViewProfile instructorData={instructorData} />
    </>
  );
};

export default Page;
