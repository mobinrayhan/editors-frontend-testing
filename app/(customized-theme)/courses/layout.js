// import custom provider for redux state management.
import { Fragment } from "react";

// import theme style scss file
// import "styles/theme.scss";

// import layouts
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import Footer from "layouts/marketing/footers/Footer";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <NavbarDefault login />
      <main>{children}</main>
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
}
