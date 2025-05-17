// import node module libraries
import Link from "next/link";
import { Fragment, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Search, Sliders } from "react-bootstrap-icons";

// import sub component
import FilterOptions from "./FilterOptions";
import OffcanvasFilter from "./OffcanvasFilter";

const FilterMentorHero = () => {
  // Off canvas filter hooks for mobile devices
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      {/* Hero section with filter options */}
      <section
        className="pt-xl-8 pt-6 bg-white"
        style={{
          backgroundImage: "url(/images/mentor/mentor-glow.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="py-4">
            <Col
              xxl={{ span: 6, offset: 3 }}
              md={{ span: 8, offset: 2 }}
              xs={12}
            >
              <div className="text-center mb-3">
                <div className="d-flex flex-column gap-3">
                  <h1 className="display-4 mb-0">
                    Book a <span className="text-primary">mentor</span> of your
                    choice
                  </h1>
                  <Form className="form-inline px-xl-8 mx-xl-8">
                    <div className="d-flex align-items-center">
                      <span className="position-absolute ps-3">
                        <Search size={16} />
                      </span>
                      <Form.Control
                        type="search"
                        id="search-input"
                        placeholder="Search by company, skills or role"
                        className="ps-6 form-control-lg"
                      />
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
          <div
            className="offcanvas-xl offcanvas-bottom h-auto start-0 mx-2 pb-2 rounded-3 bottom-md-50 "
            tabIndex="-1"
            id="searchbar"
            aria-labelledby="searchbar"
          >
            <div className="offcanvas-body d-grid">
              <FilterOptions />
            </div>
          </div>
        </Container>
      </section>
      <OffcanvasFilter
        placement="bottom"
        name="bottom"
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <div className="d-xl-none d-block">
        <div className="position-fixed start-0 m-3 bottom-0">
          <Link
            className="btn btn-dark"
            onClick={handleShow}
            data-bs-toggle="offcanvas"
            href="#searchbar"
            aria-controls="searchbar"
          >
            <span>
              <Sliders size={16} className="text-white me-2" />{" "}
            </span>{" "}
            Filters
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterMentorHero;
