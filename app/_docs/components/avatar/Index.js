"use client";

// import node module libraries
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from "widgets";

// import sub components
import { Avatar, AvatarGroup, Ratio } from "components/bootstrap/Avatar";

// import react code data file
import {
  AvatarDarkColor,
  AvatarGroups,
  AvatarGroupsTooltip,
  AvatarRatio,
  AvatarsCode,
  AvatarShapes,
  AvatarSoftColor,
  InitialsCode,
  StatusIndicator,
} from "data/code/AvatarCode";

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { avatarStylesLinks } from "data/docs/SidebarContentLinks";

const AvatarStyles = () => {
  return (
    <DocsInnerLayout links={avatarStylesLinks} id="intro">
      <div className="docs-content mx-xxl-9">
        <PageHeadingDescription
          title='Avatar <span className="badge bg-primary">Geeks Only</span>'
          description="Cool avatars with different shapes, sizes and with the
									possibility to group them."
        />

        <div id="default-avatar"></div>
        <hr className="mb-5 mt-7" />

        {/*  Default  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Avatars </h3>
              <p>
                Use avatar sizing via className on{" "}
                <code>avatar-* xxl, xl, lg, md, sm, xs</code>
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Avatar
                        size="xxl"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="xl"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="lg"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="md"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="sm"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="xs"
                        type="image"
                        src="/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarsCode} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of Default */}

        <div id="intials-avatar"></div>
        <hr className="mb-5 mt-7" />

        {/*  intials avatar  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Initials </h3>
              <p>
                You won&apos;t always have an image for every user, so easily
                use <code>.avatar-initials</code> instead.
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Avatar
                        size="xxl"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="xl"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="lg"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="sm"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />{" "}
                      <Avatar
                        size="xs"
                        type="initial"
                        name="G K"
                        className="rounded-circle"
                        status="online"
                        alt="G K"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={InitialsCode} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of  intials avatar */}

        <div id="status-avatar"></div>
        <hr className="mb-5 mt-7" />

        {/*  status avatar  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Status Indicator </h3>
              <p className="mb-5">
                Use <code>.avatar-indicators</code> className on{" "}
                <code> div.avatar</code> element
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        {" "}
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        {" "}
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Avatar
                        size="xxl"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="online"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="xl"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="away"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="lg"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="offline"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="online"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="sm"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="away"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="xs"
                        src="/images/avatar/avatar-1.jpg"
                        type="image"
                        status="online"
                        className="rounded-circle"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={StatusIndicator} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of status avatar */}

        <div id="group-avatar"></div>
        <hr className="mb-5 mt-7" />

        {/*  group avatar  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Groups </h3>
              <p className="mb-5">
                Use <code>&lt;Avatar&gt;</code> within{" "}
                <code>&lt;AvatarGroup&gt;</code> to create Avtar Group. Set{" "}
                <code>type = image</code> or <code>initial</code> for Image
                avtar and avtar with initial respectivly.{" "}
              </p>
            </div>

            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        {" "}
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        {" "}
                        Code{" "}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <div className="d-lg-flex">
                        <AvatarGroup className="me-2">
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-1.jpg"
                            type="image"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-2.jpg"
                            type="image"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-3.jpg"
                            type="image"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-4.jpg"
                            type="image"
                            className="rounded-circle"
                          />
                        </AvatarGroup>
                        <AvatarGroup>
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="primary"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="warning"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="success"
                            className="rounded-circle"
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="info"
                            className="rounded-circle"
                          />
                        </AvatarGroup>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarGroups} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of group avatar */}

        <div id="group-avatar-tooltip"></div>
        <hr className="mb-5 mt-7" />

        {/*  group avatar with image or avtar tooltip  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Groups with tooltip </h3>
              <p className="mb-5">
                Apply above settings mentioned in Avtar Group example + set{" "}
                <code>name = name of avtar in string format </code> and add{" "}
                <code>imgtooltip</code> parameters to add image tooltip.{" "}
              </p>
            </div>

            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code{" "}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <div className="d-lg-flex">
                        <AvatarGroup className="me-2">
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-1.jpg"
                            type="image"
                            className="rounded-circle"
                            name="Jacob Wilson"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-2.jpg"
                            type="image"
                            className="rounded-circle"
                            name="Dianna Smiley"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-3.jpg"
                            type="image"
                            className="rounded-circle"
                            name="Kristin Watson"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-4.jpg"
                            type="image"
                            className="rounded-circle"
                            name="Nia Sikhone"
                            imgtooltip
                          />
                        </AvatarGroup>
                        <AvatarGroup className="me-2">
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="primary"
                            className="rounded-circle"
                            name="Jacob Wilson"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="warning"
                            className="rounded-circle"
                            name="Dianna Smiley"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="success"
                            className="rounded-circle"
                            name="Kristin Watson"
                            imgtooltip
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="info"
                            className="rounded-circle"
                            name="Nia Sikhone"
                            imgtooltip
                          />
                        </AvatarGroup>

                        <AvatarGroup>
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="primary"
                            className="rounded-circle"
                            name="Jacob Wilson"
                            imgtooltip
                            soft
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="warning"
                            className="rounded-circle"
                            name="Dianna Smiley"
                            imgtooltip
                            soft
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="success"
                            className="rounded-circle"
                            name="Kristin Watson"
                            imgtooltip
                            soft
                          />
                          <Avatar
                            size="lg"
                            type="initial"
                            variant="info"
                            className="rounded-circle"
                            name="Nia Sikhone"
                            imgtooltip
                            soft
                          />
                        </AvatarGroup>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarGroupsTooltip} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of group avatar with image or avtar tooltip */}

        <div id="shape-avatar"></div>
        <hr className="mb-5 mt-7" />

        {/*  shape avatar  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Shape </h3>
              <p className="mb-5">
                Use <code>.rounded</code> and <code>.rounded-circle</code>{" "}
                className to make avatar rounded and circlular respectively.
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        {" "}
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        {" "}
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <div className="d-lg-flex">
                        <div className="me-4">
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-1.jpg"
                            type="image"
                            className="rounded"
                          />{" "}
                          <Avatar
                            size="lg"
                            src="/images/avatar/avatar-2.jpg"
                            type="image"
                            className="rounded-circle me-1"
                          />
                        </div>
                        <div>
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="primary"
                            className="rounded"
                          />{" "}
                          <Avatar
                            size="lg"
                            type="initial"
                            name="G K"
                            variant="warning"
                            className="rounded-circle"
                          />
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarShapes} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of shape avatar */}

        <div id="ratio"></div>
        <hr className="mb-5 mt-7" />

        {/*  ratio  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Ratio </h3>
              <p>
                For using <code>4:3</code> ratio size between the width and the
                height apply <code>size</code> attribute with{" "}
                <code>xxl, xl, lg, md, sm, xs</code> possible value with{" "}
                <code>&lt;Ratio&gt;</code> component.
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="xxl"
                        className="me-1 rounded"
                      />{" "}
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="xl"
                        className="me-1 rounded"
                      />{" "}
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="lg"
                        className="me-1 rounded"
                      />{" "}
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="md"
                        className="me-1 rounded"
                      />{" "}
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="sm"
                        className="me-1 rounded"
                      />{" "}
                      <Ratio
                        src="/images/placeholder/4by3.jpg"
                        size="xs"
                        className="me-1 rounded"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarRatio} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of ratio */}

        <div id="color"></div>
        <hr className="mb-5 mt-7" />

        {/*  color  */}
        <Row>
          <Col xl={12} lg={12} md={12} sm={12}>
            <div className="mb-4">
              <h3>Color </h3>
              <p>
                Predefined avatar color and styles for more usage. Use{" "}
                <code>.avatar-*</code> classes.
              </p>
            </div>
            <Tab.Container defaultActiveKey="design">
              <Card>
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="primary"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="secondary"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="success"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="danger"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="warning"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="info"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="light"
                        className="rounded-circle text-dark"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        variant="dark"
                        className="rounded-circle"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarDarkColor} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>

            <Tab.Container defaultActiveKey="design">
              <Card className="mt-5 mb-5">
                <Card.Header className="border-bottom-0 p-0 ">
                  <Nav className="nav-lb-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
                        Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="code" className="mb-sm-3 mb-md-0">
                        Code
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body className="p-0">
                  <Tab.Content>
                    <Tab.Pane eventKey="design" className="pb-4 p-4">
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="primary"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="secondary"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="success"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="danger"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="warning"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="info"
                        className="rounded-circle"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="light"
                        className="rounded-circle text-dark"
                      />{" "}
                      <Avatar
                        size="md"
                        type="initial"
                        name="G K"
                        soft
                        variant="dark"
                        className="rounded-circle"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="code" className="pb-4 p-4 react-code">
                      <HighlightCode code={AvatarSoftColor} />
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
        </Row>
        {/* end of color */}
      </div>
    </DocsInnerLayout>
  );
};

export default AvatarStyles;
