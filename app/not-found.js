// "use client";

// // import node module libraries
// import Link from "next/link";
// import { Col, Container, Image, Row } from "react-bootstrap";

// // import layouts
// import FooterWithSocialIcons from "layouts/marketing/footers/FooterWithSocialIcons";
// import NavbarBrandOnly from "layouts/marketing/navbars/NavbarBrandOnly";

// const Error404 = () => {
//   return (
//     <main>
//       <section id="db-wrapper" className="bg-white">
//         <Container className="d-flex flex-column">
//           <NavbarBrandOnly />
//           <Row>
//             <Col lg={12} md={12} sm={12}>
//               <Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
//                 <Col
//                   xl={{ offset: 1, span: 4 }}
//                   lg={6}
//                   md={12}
//                   className="text-center text-lg-start"
//                 >
//                   <h1 className="display-1 mb-3">404</h1>
//                   <p className="mb-5 lead">
//                     Oops! Sorry, we couldn’t find the page you were looking for.
//                     If you think this is a problem with us, please{" "}
//                     <Link href="#" className="btn-link">
//                       <u>Contact us</u>
//                     </Link>
//                   </p>
//                   <Link href="/" className="btn btn-primary me-2">
//                     Back to Safety
//                   </Link>
//                 </Col>
//                 <Col
//                   xl={{ offset: 1, span: 6 }}
//                   lg={6}
//                   md={12}
//                   className="mt-8 mt-lg-0"
//                 >
//                   <Image
//                     src="/images/error/404-error-img.svg"
//                     alt=""
//                     className="w-100"
//                   />
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           <FooterWithSocialIcons />
//         </Container>
//       </section>
//     </main>
//   );
// };

// export default Error404;
import { Button, Container } from "react-bootstrap";

export default function Error404() {
  return (
    <main className="bg-light vh-100 d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <p className="text-primary fw-semibold" style={{ fontSize: "32px" }}>
          404
        </p>
        <h1 className="mt-4 display-1 fw-semibold text-dark">Page not found</h1>
        <p className="mt-4 fs-5 text-secondary">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-5 d-flex justify-content-center gap-3">
          <Button href="/" variant="primary">
            Go back home
          </Button>
          <Button href="/contact" variant="outline-dark">
            Contact support →
          </Button>
        </div>
      </Container>
    </main>
  );
}
