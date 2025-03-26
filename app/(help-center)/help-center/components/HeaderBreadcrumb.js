// import node module libraries
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Col, Row, Container, Navbar, ListGroup } from 'react-bootstrap';

// import hooks
import useMounted from 'hooks/useMounted';

const HeaderBreadcrumb = ({ title, breadcrumb }) => {
	const hasMounted = useMounted();
	return (
		<Fragment>
			{/* page title  */}
			<section className="py-8 bg-light">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<h1 className="fw-bold mb-0 display-4">{title}</h1>
						</Col>
					</Row>
				</Container>
			</section>

			{/* breadcrumb  */}
			<section className="pt-3">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<Navbar aria-label="breadcrumb" bsPrefix=' '>
								<ListGroup as="ol" bsPrefix="breadcrumb">
									{hasMounted && breadcrumb.map((item, index) => {
										return (
											<ListGroup.Item as="li" bsPrefix="breadcrumb-item" key={index}
												active={index === breadcrumb.length - 1 ? true : false}
											>
												{index === breadcrumb.length - 1 ? (
													item.page
												) : (
													<Link href={item.link}>{item.page}</Link>
												)}
											</ListGroup.Item>
										);
									})}
								</ListGroup>
							</Navbar>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};
export default HeaderBreadcrumb;
