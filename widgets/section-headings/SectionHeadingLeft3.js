// Section : Header
// Style : H2 title, subtitle with description in left aligned

// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const SectionHeadingLeft3 = ({
  title,
  subtitle,
  description,
  className = "display-3",
  btntext,
  btnlink,
}) => {
  return (
    <Row>
      <Col xl={7} lg={10} md={12} xs={12}>
        {/* heading */}
        {subtitle && (
          <span className="text-uppercase text-primary fw-semi-bold ls-md">
            {subtitle}
          </span>
        )}
        <h1 className={`${className} mt-4 mb-4 fw-bold`}>{title}</h1>

        {/* para */}
        <p className="fs-3 mb-5">{description}</p>

        {/* button */}
        {btnlink && btntext ? (
          <Link href={btnlink} className="btn btn-primary">
            {btntext}
          </Link>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

// Typechecking With PropTypes
SectionHeadingLeft3.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
  btntext: PropTypes.string,
  btnlink: PropTypes.string,
};

export default SectionHeadingLeft3;
