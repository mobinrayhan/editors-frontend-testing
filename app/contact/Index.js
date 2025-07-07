// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";

// import MDI icons
import { mdiFacebook, mdiMusicCircle, mdiWhatsapp, mdiYoutube } from "@mdi/js";
import Icon from "@mdi/react";

// import BS icons
import { EnvelopeOpen, GeoAlt, Telephone } from "react-bootstrap-icons";

// import sub components
import ContactForm from "./components/ContactForm";

// import app config file
import { settings } from "app.config";
import { Footer1 } from "app/_docs/snippet/footers/components/Footer1";
import { getUserFromServerCookie } from "helper/authServer";
import Footer from "layouts/marketing/footers/Footer";
import NavbarDefault from "layouts/marketing/navbars/NavbarDefault";

const Contact = async () => {
  const sessionUser = await getUserFromServerCookie();

  return (
    <Fragment>
      <NavbarDefault sessionUser={sessionUser} />
      <main>
        <section className="bg-white container-fluid">
          <Row className="align-items-center min-vh-100">
            <Col lg={6} md={12} sm={12}>
              <div className="px-xl-20 px-md-8 px-4 py-8 py-lg-0">
                {/* content */}
                <div className="d-flex justify-content-between mb-2 align-items-center">
                  <Link href="/">
                    <Image
                      src={settings.theme.logo}
                      alt={"Editors Academy Logo"}
                      style={{ cursor: "pointer", objectFit: "contain" }}
                      height={40}
                      width={150}
                    />
                  </Link>
                </div>
                <div className="text-dark">
                  <h1 className="display-4 fw-bold">Get In Touch.</h1>
                  <p className="lead text-dark">
                    Fill in the form to the right to get in touch with someone
                    on our team, and we will reach out shortly.
                  </p>

                  <div className="mt-8">
                    <p className="fs-4 mb-4">
                      If you are seeking support please visit our{" "}
                      <Link href="#">support portal</Link> before reaching out
                      directly.
                    </p>
                    {/* Address */}
                    <p className="fs-4">
                      <Telephone size={16} className="text-primary me-2" />
                      +8801324-531144
                    </p>
                    <p className="fs-4">
                      <EnvelopeOpen size={16} className="text-primary me-2" />{" "}
                      contact@editors.academy
                    </p>
                    <p className="fs-4 ">
                      <GeoAlt size={17} className="text-primary me-2" />
                      ৪/১৩ , জনতা হাউজিং মিরপুর - ০১, ঢাকা ১২১৬
                    </p>
                  </div>

                  {/* social media */}
                  <div className="mt-10">
                    {/*Facebook*/}
                    <Link
                      href="https://www.facebook.com/EditorsAcademy"
                      target="_blank"
                      className="text-muted me-3"
                    >
                      <Icon path={mdiFacebook} size={1} />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@editorsacademyofficial"
                      className="text-muted me-3"
                    >
                      <Icon path={mdiYoutube} size={1} />
                    </Link>
                    {/*Twitter*/}
                    <Link
                      href="https://www.tiktok.com/@EditorsAcademyOfficial"
                      className="text-muted me-3"
                      target="_blank"
                    >
                      <Icon path={mdiMusicCircle} size={1} />
                    </Link>
                    {/*GitHub*/}
                    <Link
                      target="_blank"
                      href="https://api.whatsapp.com/send/?phone=8801324531144&text=Welcome+to+editors+academy&type=phone_number&app_absent=0"
                      className="text-muted "
                    >
                      {/* <Icon path={mdiGithub} size={1} /> */}
                      <Icon path={mdiWhatsapp} size={1} />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            {/* right side form section with background color */}
            <Col
              lg={6}
              className="d-lg-flex align-items-center w-lg-50 min-vh-lg-100 position-fixed-lg bg-cover bg-light top-0 right-0"
            >
              <ContactForm />
            </Col>
          </Row>
        </section>
      </main>
      {/* Footer section */}
      <Footer1 bgColor="bg-light" />
      <Footer bgColor="bg-light" />
    </Fragment>
  );
};

export default Contact;
