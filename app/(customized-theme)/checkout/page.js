import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import { redirect } from "next/navigation";
import Checkout from "./Index";
// import { Footer1 } from "./_docs/snippet/footers/components/Footer1";
// import Footer from "layouts/marketing/footers/Footer";

const page = async () => {
  const sessionUser = await getUserFromServerCookie();
  if (!sessionUser) {
    redirect(`/authentication/sign-in`);
  }

  return (
    <>
      <NavbarDefault sessionUser={sessionUser} />
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
