// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Menu, Search } from "react-feather";

// import sub components
import QuickMenu from "layouts/QuickMenu";

const HeaderDefault = (props) => {
  return (
    <Fragment>
      <Navbar expanded="lg" className="navbar-default">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Link
              href="#"
              id="nav-toggle"
              onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}
            >
              <Menu size="18px" />
            </Link>
            <div className="ms-lg-3 d-none d-md-none d-lg-block">
              {/*   Form   */}
              <Form className=" d-flex align-items-center">
                <InputGroup
                  className="input-group-merge search-bar"
                  bsPrefix="group-of-input"
                >
                  <InputGroup.Text className="ps-2 pe-1 mx-2 my-1 h-40 position-absolute search-icon border-0">
                    <Search size="12px" className="text-secondary" />
                  </InputGroup.Text>
                  <Form.Control
                    type="search"
                    className="form-control form-control-sm ps-6"
                    placeholder="Search Entire Dashboard"
                  />
                </InputGroup>
              </Form>
            </div>
          </div>

          <Nav className="navbar-nav navbar-right-wrap ms-auto d-flex align-items-center nav-top-wrap">
            <QuickMenu />
          </Nav>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default HeaderDefault;
