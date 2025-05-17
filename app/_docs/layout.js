"use client";

// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Button, Image } from "react-bootstrap";

// import sub components
import DarkLightMode from "layouts/DarkLightMode";
import DocSidebar from "layouts/docs/DocSidebar";

// import app config file
import { settings } from "app.config";

// import hooks
import useMounted from "hooks/useMounted";

export default function DashboardLayout({ children }) {
  const hasMounted = useMounted();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="docs-main-wrapper">
      <div className="docs-header">
        <nav className="navbar navbar-expand-md fixed-top ms-0">
          <Link
            className="navbar-brand"
            href="/docs/getting-started/introduction"
          >
            <Image src={settings.theme.logo} alt={settings.app.name} />
          </Link>
          <div className="ms-auto d-flex align-items-center">
            <DarkLightMode />
            <div className="d-flex">
              <div className="me-2 me-lg-0 ms-2">
                <Link className="btn btn-primary" href="https://bit.ly/geeksui">
                  Buy now
                </Link>
              </div>
              <div>
                <Button
                  bsPrefix="btn-icon"
                  className="btn navbar-toggler"
                  onClick={() => setShowMenu(!showMenu)}
                  type="button"
                >
                  <span className="navbar-toggler-icon"></span>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {hasMounted && (
        <DocSidebar showMenu={showMenu} onClick={() => setShowMenu(false)} />
      )}
      <main className="docs-wrapper">
        <section className="container-fluid">{children}</section>
      </main>
    </div>
  );
}
