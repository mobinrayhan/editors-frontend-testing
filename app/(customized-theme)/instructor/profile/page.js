// import sub components

import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import ViewProfile from "./Index";

export const metadata = {
  title: "View Profile | Geeks Nextjs Template",
};

const Page = () => {
  return (
    <>
      {/* <NavbarDefault  /> */}
      <NavbarDefault login />

      <ViewProfile />
    </>
  );
};

export default Page;
