// import node module libraries
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

// import routes file
import NavSidebar from "routes/docs/NavSidebar";

const DocSidebar = ({ showMenu, onClick }) => {
  const location = usePathname();
  return (
    <aside className="docs-nav-sidebar">
      <div className="py-5"></div>
      <div className="docs-nav">
        <Navbar expand="lg" className="shadow-none" expanded={showMenu}>
          <Navbar.Collapse id="navbarNav">
            <Nav as="ul" className="navbar-nav flex-column in">
              {NavSidebar.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <NavItem as="li" bsPrefix="navbar-header">
                      <h5 className="heading">{item.title}</h5>
                    </NavItem>
                    {item.children.map((menu, menuIndex) => {
                      return (
                        <NavItem as="li" key={menuIndex}>
                          <Link
                            href={menu.link}
                            onClick={onClick}
                            className={
                              "nav-link " +
                              (location === menu.link ? "active" : "")
                            }
                          >
                            {menu.name}
                          </Link>
                        </NavItem>
                      );
                    })}
                  </Fragment>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="nav-footer">
        <p className="mb-0">
          Developed by{" "}
          <Link href="https://codescandy.com" target="_blank">
            Codescandy
          </Link>
        </p>
      </div>
    </aside>
  );
};

export default DocSidebar;
