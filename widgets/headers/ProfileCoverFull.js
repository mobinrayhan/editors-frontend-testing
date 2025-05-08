// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Image, Container, Badge } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import {
  mdiFacebook,
  mdiTwitter,
  mdiYoutube,
  mdiLinkVariant,
  mdiInstagram,
} from "@mdi/js";

const ProfileCoverFull = ({ dashboardData, instructor }) => {
  return (
    <Fragment>
      {/* Bg */}
      <section
        className="py-20"
        style={{
          background: `url('/images/background/profile-bg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      ></section>
      {/* User info */}
      <section className="card p-lg-2 pt-2 pt-lg-0 rounded-0 border-0">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} md={8} sm={12}>
              <div className="d-flex align-items-center">
                <div className="position-relative mt-n9">
                  <Image
                    style={{ objectFit: "cover" }}
                    src={
                      instructor[0]?.profileImage ||
                      "https://i.ibb.co.com/KzfWFxGn/187910563-10220662170840378-3981185376255859365-n.jpg"
                    }
                    alt=""
                    className="rounded-circle avatar-xxl border-white border-4 position-relative"
                  />
                  {dashboardData.verified ? (
                    <Link
                      href="#"
                      className="position-absolute top-0 end-0 me-2"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title="Verified"
                    >
                      <Image
                        src="/images/svg/checked-mark.svg"
                        alt=""
                        height="30"
                        width="30"
                      />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className="ms-3">
                  <div className="d-flex align-items-center">
                    <h3 className="mb-0 fw-bold me-2">{instructor[0].name}</h3>
                    <Badge
                      bg="secondary"
                      className="bg-light-primary text-primary"
                    >
                      {dashboardData.badge}
                    </Badge>
                  </div>
                  <span className="fs-6">{instructor[0]?.expertise}</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <div className="fs-4 mt-4 mt-lg-0 pb-2 pb-lg-0 d-lg-flex justify-content-end">
                {/* <Link href={dashboardData.youtube}>
                  <Icon
                    path={mdiYoutube}
                    size={0.6}
                    className="text-muted me-2"
                  />
                </Link>
                <Link href={dashboardData.link}>
                  <Icon
                    path={mdiLinkVariant}
                    size={0.6}
                    className="text-muted me-2"
                  />
                </Link>
                <Link href={dashboardData.instagram}>
                  <Icon
                    path={mdiInstagram}
                    size={0.6}
                    className="text-muted me-2"
                  />
                </Link>
                <Link href={dashboardData.facebook}>
                  <Icon
                    path={mdiFacebook}
                    size={0.6}
                    className="text-muted me-2"
                  />
                </Link> */}
                <Link href={JSON.parse(instructor[0]?.socialLinks)?.twitter}>
                  <Icon
                    path={mdiTwitter}
                    size={0.6}
                    className="text-muted me-2"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProfileCoverFull;
