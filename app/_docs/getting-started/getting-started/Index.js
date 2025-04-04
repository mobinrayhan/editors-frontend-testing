"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { introductionLinks } from "data/docs/SidebarContentLinks";

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from "widgets";

const Index = () => {
  return (
    <DocsInnerLayout links={introductionLinks} id="intro">
      <div className="docs-content mx-xxl-9">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="mb-0" >

              <PageHeadingDescription
                title="Getting Started"
                description="A professional Geeks UI Next.js kit that comes with plenty of
                                ready-to-use components that will help you to build more
                                beautiful web application and frontend pages."
              />
              <hr className="mb-5 mt-7" />



              <p>
                Geeks UI Next.js UI kit is built with the most popular front-end framework{' '}
                <Link
                  href="https://react-bootstrap.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ReactJS Bootstrap
                </Link>{' '}
                with react-scripts.
              </p>
              <p>
                This doc will guide you to understand how Geeks UI Next.js theme is
                organized, basics of how to customize, and how to compile from
                the source code if you want.
              </p>

            </div>
          </Col>
        </Row>
        <div id="setting-up-locally"></div>
        <hr className="mb-5" />

        <Row>
          <Col md={12} xs={12}>
            <h2 className="mb-0 mt-2 fw-bold" >Running in Local environment</h2>
            <p>This project is scaffolded using <code>npx create-next-app@latest</code>.</p>
            <ol>
              <li>
                <h4 className="mb-0 fw-bold">Requirements Node.js</h4>
                <p>
                  Before proceeding you&apos;ll need to have the latest <b>stable (LTS) </b>{' '}
                  <a
                    href="https://nodejs.org/en/download/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    nodejs. <i className="fe fe-external-link"></i>
                  </a>{' '}
                  Install <code>Node.js</code> or already have it installed on
                  your machine move to next step.<br />
                  Here preferable versions are 18.20.4(LTS) or 20.18.0(LTS)
                </p>
              </li>
              <li>
                {' '}
                <h4 className="mb-0 fw-bold">Install Geeks UI Next.js</h4>
                <p>
                  Open the <span>geeks-nextjs-app-router  </span>directory with your cmd
                  or terminal. Open the project folder and install its
                  dependencies.{' '}
                </p>

                <HighlightCode className="py-3 ps-3" code={'cd geeks-nextjs-app-router'} />

                <HighlightCode className="py-3 ps-3" code={'npm install'} />

                <p>
                  This command will download all the necessary dependencies
                  for geeksui next.js theme in the node_modules directory.
                </p>
              </li>
              <li>
                <h4 className="mb-0 fw-bold">Start</h4>
                <p>
                  Run <code>npm run dev</code> or <code>yarn dev</code> or <code>pnpm dev</code> to start the development server on http://localhost:3000
                </p>
                <p>
                  Visit <code><Link
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://localhost:3000{' '}
                  </Link></code> to view your application
                </p>
                <HighlightCode className="py-3 ps-3" code={'npm run dev'} />

              </li>
            </ol>
            <div id="production-build"></div>
            <hr className="mb-5 mt-7" />
            <h2 className="mb-0 fw-bold" >Creating a Production Build.</h2>
            <p>Production build of your app.</p>
            <ol>
              <li>
                <div className="mb-4">
                  <p>
                    Run <code>npm run build</code> command in your project
                    directory to make the Production build app.
                  </p>
                  <HighlightCode className="py-3 ps-3" code={'npm run build'} />

                </div>
              </li>
              <li>
                <div className="">
                  <p> This output is generated inside the <code>.next</code> folder:</p>
                  <HighlightCode className="py-3 ps-3" code={'npm run start'} />

                  <p>
                    Once you execute above command, the production build run
                    locally at <code>http://localhost:3000</code>.
                  </p>
                </div>
              </li>
            </ol>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
