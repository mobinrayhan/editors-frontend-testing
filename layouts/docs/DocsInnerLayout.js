// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import custom components
import SidebarContent from "./SidebarContent";

const DocsInnerLayout = ({ children, isOpen = true, links, id = "#", offset = false, fullWidth = false }) => {
  return (
    <Row id={id}>
      {fullWidth ?
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          {children}
        </Col> :
        <Fragment>
          <Col
            xxl={offset ? { span: 6, offset: 2 } : { span: 8, offset: 1 }}
            xl={offset ? { span: 7, offset: 1 } : { span: 8, offset: 1 }}
            lg={12} md={12} sm={12} xs={12}
            className={offset ? '' : "px-5 px-xl-0"}>
            {children}
          </Col>
          {isOpen && <Col xl={2} lg={2} md={6} sm={12} xs={12} className="d-none d-xl-block position-fixed end-0">
            <div className="sidebar-nav-fixed">
              <span className="px-4 mb-2 d-block text-uppercase ls-md fw-semibold fs-6">Contents</span>
              <SidebarContent data={links} />
            </div>
          </Col>}
        </Fragment>
      }

    </Row>
  );
};

export default DocsInnerLayout;
