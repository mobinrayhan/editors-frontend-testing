import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

export default async function SupportRoot({ children }) {
  const sessionUser = await getUserFromServerCookie();

  return (
    <>
      <NavbarDefault sessionUser={sessionUser} />
      {children}

      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-white" />
    </>
  );
}
