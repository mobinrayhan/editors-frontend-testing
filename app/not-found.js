'use client'

// import node module libraries
import { Col, Row, Image, Container } from 'react-bootstrap';
import Link from 'next/link';

// import layouts
import NavbarBrandOnly from 'layouts/marketing/navbars/NavbarBrandOnly';
import FooterWithSocialIcons from 'layouts/marketing/footers/FooterWithSocialIcons';

const Error404 = () => {
	return (
		<main>
			<section id="db-wrapper" className="bg-white">
				<Container className="d-flex flex-column">
					<NavbarBrandOnly />
					<Row>
						<Col lg={12} md={12} sm={12}>
							<Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
								<Col
									xl={{ offset: 1, span: 4 }}
									lg={6}
									md={12}
									className="text-center text-lg-start"
								>
									<h1 className="display-1 mb-3">404</h1>
									<p className="mb-5 lead">
										Oops! Sorry, we couldn’t find the page you were looking for. If
										you think this is a problem with us, please{' '}
										<Link href="#" className="btn-link">
											<u>Contact us</u>
										</Link>
									</p>
									<Link href="/" className="btn btn-primary me-2">
										Back to Safety
									</Link>
								</Col>
								<Col
									xl={{ offset: 1, span: 6 }}
									lg={6}
									md={12}
									className="mt-8 mt-lg-0"
								>
									<Image src="/images/error/404-error-img.svg" alt="" className="w-100" />
								</Col>
							</Row>
						</Col>
					</Row>
					<FooterWithSocialIcons />
				</Container>
			</section>
		</main>
	);
};

export default Error404;
