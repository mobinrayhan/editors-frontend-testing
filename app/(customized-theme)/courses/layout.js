// import custom provider for redux state management.
import { Fragment } from "react";

// import theme style scss file
// import "styles/theme.scss";

// import layouts
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

export default async function RootLayout({ children }) {
  const sessionUser = await getUserFromServerCookie();

  return (
    <Fragment>
      <NavbarDefault sessionUser={sessionUser} />
      <main>{children}</main>
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
}
