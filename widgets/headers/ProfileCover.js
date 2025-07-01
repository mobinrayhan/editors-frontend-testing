// import node module libraries
import { getUserFromClientCookie } from "helper/auth";
import { Avatar } from "layouts/QuickMenu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

// import custom components

const ProfileCover = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserFromClientCookie().then(({ user }) => setUser(user));
  }, []);

  return (
    <Row className="align-items-center">
      <Col xl={12} lg={12} md={12} sm={12}>
        <div
          className="pt-16 rounded-top-md"
          style={{
            background: `url('/images/background/profile-bg.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <Card className="card px-4 pt-2 pb-4 rounded-0 rounded-bottom shadow-sm">
          <div className="d-flex align-items-end justify-content-between  ">
            <div className="d-flex align-items-center">
              <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                {user?.profileImage ? (
                  <Image
                    src={user?.profileImage}
                    className="avatar-xl rounded-circle border border-4 border-white position-relative"
                    alt=""
                  />
                ) : (
                  <div className="avatar-xl rounded-circle border border-4 border-white position-relative">
                    <Avatar
                      name={user?.name}
                      width={73}
                      height={73}
                      isActiveAvatar={false}
                    />
                  </div>
                )}

                {false ? (
                  <Link
                    href="#"
                    className="position-absolute top-0 end-0"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Verified"
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
              <div className="lh-1">
                <h2 className="mb-0">
                  {user?.name}{" "}
                  {/* <LevelIconWithTooltip level={dashboardData.level} />{" "} */}
                </h2>
                <p className="mb-0 d-block">
                  {user?.mobileNumber || user?.email}
                </p>
              </div>
            </div>
            <div>
              <Link href="/" className="btn btn-primary d-none d-md-block">
                Go Back To Home
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ProfileCover;
