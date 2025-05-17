// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Card, Collapse } from "react-bootstrap";

const AboutMentor = () => {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <Card.Body className="p-md-5 d-flex flex-column gap-3">
        <h3 className="mb-0">About</h3>
        <div className="d-flex flex-column">
          <p className="mb-1">
            An award-winning designer with 7+ years of experience in UX design,
            product design and branding. I&apos;ve mentored and placed students
            in design jobs in the US, Europe, Japan and India. I&apos;m on a
            mission to unleash design maestros, fueling their creative
            superpowers, unlocking awesome full-time gigs, and igniting their
            industry influence through mind-blowing creative adventures!
          </p>
          <Collapse in={open}>
            <div id="collapseAbout">
              <p className="my-3">
                I&apos;ve helped businesses in US, Europe and Japan generate
                $200M+ in revenue, through my product design and branding
                skills. My top 3 industries are web3, AI and edtech.
              </p>
            </div>
          </Collapse>
          <div>
            <Link
              href="#"
              className="btn-link"
              scroll={false}
              onClick={() => setOpen(!open)}
              role="button"
              aria-controls="collapseAbout"
            >
              Read {open ? "less" : "more"}
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutMentor;
