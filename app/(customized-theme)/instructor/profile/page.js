import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import getFetch from "helper/getFetch";
import { API_ENDPOINT } from "helper/global";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import ViewProfile from "./Index";

export const metadata = {
  title: "Instructor Profile | Editors Academy",
  description: "Instructor Profile | Editors Academy",
};

const Page = async () => {
  const { instructor } = await getFetch(
    `${API_ENDPOINT}/courses/1/instructors`
  );
  const sessionUser = await getUserFromServerCookie();

  return (
    <>
      <NavbarDefault sessionUser={sessionUser} />
      <ViewProfile instructor={instructor} />
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </>
  );
};

export default Page;
