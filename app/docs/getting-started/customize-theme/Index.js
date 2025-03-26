'use client';

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { customizeLinks } from "data/docs/SidebarContentLinks";

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from "widgets";

const Index = () => {

  const newStyleVariables = `// Theme Colors
$primary: #ef1e65 !default;
$secondary: #424e68 !default;
$success: #6786b7 !default;
$info: #c8c6c4 !default;
$warning: #b4c9e1 !default;
$danger: #dd4040 !default;
$light: #f2f2f2 !default;
$dark: #000101 !default;

// Light Colors
$light-primary: #ffeef7 !default;
$light-secondary: #707785 !default;
$light-success: #aeb6c5 !default;
$light-info: #dfddda !default;
$light-warning: #eaecf0 !default;
$light-danger: #f27474 !default;
$light-dark: #151717 !default;

// Dark Colors
$dark-primary: #cb0547 !default;
$dark-secondary: #2b3957 !default;
$dark-success: #476ba5 !default;
$dark-danger: #d32424 !default;
$dark-warning: #85aad3 !default;
$dark-info: #b09377 !default;`;

  const changeLogo = `app: {
  ...
  logo: '/images/brand/logo/logo.svg',
  mentorLogo: '/images/mentor/geeks-mentor.svg',
  ...
}`;
  return (
    <DocsInnerLayout links={customizeLinks} id="intro">
      <div className="docs-content mx-xxl-9">
        <PageHeadingDescription
          title="Customize Theme"
          description=" Customize your application&apos;s default colors codes easily in real time."
        />
        <div id="color-variables"></div>
        <hr className="mb-5 mt-7" />

        <Row>
          <Col md={12} xs={12}>

            <Row className="docs-example">
              <Col md={12} xs={12}>

                <div >
                  <h3 className="mb-0">Changing Color Variables</h3><br />

                  <p>Here, we will go over how you can customize the theme/colors in our template.<br /><br />
                    Theme&apos;s colors variables are defined in <code>/styles/theme/_variables.scss</code> file, but it&apos;s not preferable to modify this core style sheet file.
                    If you want to override values of these variables, you can use below file i.e. <code>_user-variables.scss</code>.
                    To update primary colors to something else navigate to below mentioned theme file and update value to desired colors in themes you like.</p>

                  File: <code>/styles/_user-variables.scss</code>

                  <p>In order to demonstrate this, here is a code example you can paste into <code>/styles/_user-variables.scss</code>, save the file and check the result of customized colors.</p>
                  <HighlightCode className="py-3 ps-3" code={newStyleVariables} />

                </div>
              </Col>
              <Col md={12} xs={12}>
                <div id="logos"></div>
                <hr />
                <div >
                  <h3 className="mb-0">Changing Logo</h3><br />

                  <p>Here, we will go over how you can change or replace current/default branding by replacing the logo path.</p>

                  File: <code>app.config.js</code>

                  <p>Open the above mentioned file, located at sourcecode root and modify urls for logo to change logo.</p>

                  <code>Note :</code> <br />
                  - Preferable Logo file type : .svg<br />
                  - Preferable Logo size : Width:150px  Height:30px<br />
                  <br />
                  <HighlightCode className="py-3 ps-3" code={changeLogo} />


                </div>
              </Col>

              <Col md={12} xs={12}>
                <div id="favicon"></div>
                <hr />

                <div >
                  <h3 className="mb-0">Changing Favicon</h3><br />

                  <p>To change the favicon of the theme, you just need to replace favicon.ico file located at below path.</p>

                  File: <code>/app/favicon.ico</code>

                </div>
              </Col>

            </Row>
          </Col>
        </Row>
      </div>
    </DocsInnerLayout>
  );
};

export default Index;
