// import node module libraries
import { Col, Container, Image, Row } from "react-bootstrap";

// import MDI icons
import { mdiFileDocument, mdiLifebuoy, mdiStar } from "@mdi/js";
import Icon from "@mdi/react";

// import widget/custom components
import { SectionHeadingLeftBold } from "widgets";

export const Features4 = () => {
  const title = "The most powerful design for web projects";
  const subtitle = "Bullet point Features";
  const description =
    "Donec eget enim volutpat punar turpis at elementum neque.";

  const features = [
    {
      id: 1,
      icon: mdiStar,
      title: "5-Star Rating",
      description:
        "Pellentesque ipsum nulla cursus sodales enim non interdum dignissim quam.",
    },
    {
      id: 2,
      icon: mdiLifebuoy,
      title: "Dedicated Support",
      description:
        "Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.",
    },
    {
      id: 3,
      icon: mdiFileDocument,
      title:
        'Quality Documentation <span className="badge bg-light-warning fs-6 text-warning ms-1">coming soon</span>',
      description:
        "Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.",
    },
  ];
  return (
    <section className="py-8">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} xs={12}>
            <div className="pe-lg-6 ps-lg-6">
              <SectionHeadingLeftBold
                title={title}
                description={description}
                subtitle={subtitle}
              />
              <div className="mt-6">
                {features.map((item, index) => {
                  return (
                    <div className="d-flex mb-4" key={index}>
                      <div>
                        {" "}
                        <Icon
                          path={item.icon}
                          size={1}
                          className="text-primary mt-1"
                        />{" "}
                      </div>
                      <div className="ms-3">
                        <h3
                          className="mb-2"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h3>
                        <p className="mb-0 fs-4">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12}>
            <div className="mt-4 mt-lg-0 bg-gray-200 rounded-4">
              <Image
                src="/images/svg/featured-img-2.svg"
                alt="..."
                className="img-fluid w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const Features4Code = `
// import node module libraries
import { Col, Row, Image, Container } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar, mdiLifebuoy, mdiFileDocument } from '@mdi/js';

// import widget/custom components
import { SectionHeadingLeftBold } from 'widgets';

export const Features4 = () => {
    const title = 'The most powerful design for web projects';
    const subtitle = 'Bullet point Features';
    const description = 'Donec eget enim volutpat punar turpis at elementum neque.';

    const features = [
        { id: 1, icon: mdiStar, title: '5-Star Rating', description: 'Pellentesque ipsum nulla cursus sodales enim non interdum dignissim quam.' },
        { id: 2, icon: mdiLifebuoy, title: 'Dedicated Support', description: 'Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.' },
        { id: 3, icon: mdiFileDocument, title: 'Quality Documentation <span className="badge bg-light-warning fs-6 text-warning ms-1">coming soon</span>', description: 'Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.' }
    ];
    return (
        <section className='py-8'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={12} xs={12}>
                        <div className="pe-lg-6 ps-lg-6">
                            <SectionHeadingLeftBold title={title} description={description} subtitle={subtitle} />
                            <div className="mt-6">
                                {features.map((item, index) => {
                                    return (
                                        <div className="d-flex mb-4" key={index}>
                                            <div> <Icon path={item.icon} size={1} className="text-primary mt-1" /> </div>
                                            <div className="ms-3">
                                                <h3 className="mb-2" dangerouslySetInnerHTML={{ __html: item.title }} ></h3>
                                                <p className="mb-0 fs-4">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className="mt-4 mt-lg-0 bg-gray-200 rounded-4">
                            <Image src='/images/svg/featured-img-2.svg' alt="..." className="img-fluid w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}`.trim();
