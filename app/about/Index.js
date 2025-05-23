// import node module libraries
import { Fragment } from "react";
import { Container } from "react-bootstrap";

// import sub components
import AboutGallery from "./components/AboutGallery";
import CTAButton from "./components/CTAButton";
import FeaturesList from "./components/FeaturesList";
import HeroContent from "./components/HeroContent";
import Stat from "./components/Stat";
import TeamGridRoundImages from "./components/TeamGridRoundImages";

// import layouts
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
// import FooterWithLinks from "layouts/marketing/footers/FooterWithLinks";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import Footer from "layouts/marketing/footers/Footer";

const About = async () => {
  const sessionUser = await getUserFromServerCookie();

  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarDefault sessionUser={sessionUser} />

      <main>
        <section className="py-10 bg-white">
          <Container>
            {/* Hero Title */}
            <HeroContent />

            {/* Justified Gallery Section */}
            <AboutGallery />

            {/* 4 Columns Stat */}
            <Stat />
          </Container>
        </section>

        {/* Three Columns Features Section */}
        <FeaturesList />

        {/* Team Section in Rounded Image with Grid Layout */}
        <TeamGridRoundImages />

        {/* Hero Call to Action */}
        <CTAButton />
      </main>

      {/* Footer with links */}
      {/* <FooterWithLinks /> */}
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
};

export default About;
