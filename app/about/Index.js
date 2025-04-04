"use client";

// import node module libraries
import { Fragment } from "react";
import { Container } from "react-bootstrap";

// import sub components
import HeroContent from "./components/HeroContent";
import AboutGallery from "./components/AboutGallery";
import Stat from "./components/Stat";
import TeamGridRoundImages from "./components/TeamGridRoundImages";
import CTAButton from "./components/CTAButton";
import FeaturesList from "./components/FeaturesList";

// import layouts
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";
import FooterWithLinks from "layouts/marketing/footers/FooterWithLinks";

const About = () => {
  return (
    <Fragment>
      {/* Default Navbar */}
      <NavbarDefault login />

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
      <FooterWithLinks />
    </Fragment>
  );
};

export default About;
