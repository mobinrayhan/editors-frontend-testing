"use client";

import Image from "next/image";
import "./HeroHeader.css";
// Section : Hero Header
// Style : Welcome Text on left and image on right

// import node module libraries
import Link from "next/link";
import { Container } from "react-bootstrap";

const HeroHeader = ({
  description = "এনরোল করুন জেমস প্রিন্সের Premiere Pro, After Effects, CapCut ও DaVinci Resolve কোর্সে",
  buttonLink1 = "/courses",
  buttonText2 = "Are You Instructor?",
  buttonLink2 = "/authentication/sign-in",
  buttonText1 = "সকল কোর্স",
}) => {
  return (
    <section className="bg-white">
      <Container>
        {/*  Hero Section  */}
        <div className="custom-hero-container">
          <div className="custom-left-container">
            <h1 className="text-dark fw-bold d-flex flex-column  header-font">
              <span> হয়ে উঠুন ভিডিও এডিটিং গুরু</span>{" "}
              <span className="text-primary">জিরো থেকে হিরো</span>
            </h1>
            <p className="text-dark mb-4 lead">{description}</p>
            <Link href={buttonLink1} scroll={false} className="btn btn-primary">
              {buttonText1}
            </Link>{" "}
            <Link
              href={buttonLink2}
              scroll={false}
              className="btn border-3 border-primary "
            >
              {buttonText2}
            </Link>{" "}
          </div>

          <div className="text-lg-end text-center position-relative custom-image">
            <Image
              src="/hero-image-dark.png"
              alt=""
              fill
              style={{
                position: "absolute",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroHeader;
