'use client'

// import node module libraries
import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import { Col, Row, Container, Form, Card } from 'react-bootstrap';

// import hooks
import useToggle from 'hooks/useToggle';

// import widget/custom components
import { LogosTopHeading2, PricingCard } from 'widgets';

// import data files
import {
	starter,
	individual,
	team
} from 'data/marketing/pricing/PricingPlansData';
import FAQsData from 'data/marketing/pricing/FAQsData';
import LogoList1 from 'data/clientlogos/LogoList1';

const Pricing = () => {
	const [Pricing, togglePricing] = useToggle(true);
	useEffect(() => {
		document.body.className = 'bg-light';
	});
	return (
		<Fragment>
			<section className="py-lg-13 py-8 bg-primary">
				<Container>
					{/* Page header */}
					<Row className="align-items-center">
						<Col xl={{ span: 8, offset: 2 }} lg={12} md={12} sm={12}>
							<div className="text-center mb-6 px-md-8">
								<h1 className="text-white display-3 fw-bold">
									Simple pricing that scales with your business
								</h1>
								<p className="text-white lead mb-4">
									Reference giving information on its origins, as well as a
									random Lipsum generator.
								</p>
								{/* Switch Toggle */}
								<div
									id="pricing-switch"
									className="d-flex justify-content-center align-items-center"
								>
									<span className="text-white me-2">Monthly</span>
									<Form>
										<Form.Check
											name="radios"
											type="checkbox"
											className="form-switch form-switch-price"
											id="pricingSwitch"
											checked={Pricing}
											onChange={togglePricing}
										/>
									</Form>
									<span className="text-white ms-2">Yearly</span>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Content */}
			<section className="mt-n8 pb-8">
				<Container>
					<Row>
						<Col lg={4} md={12} sm={12}>
							<PricingCard content={starter} pricingMode={Pricing} />
						</Col>
						<Col lg={4} md={12} sm={12}>
							<PricingCard content={individual} pricingMode={Pricing} />
						</Col>
						<Col lg={4} md={12} sm={12}>
							<PricingCard content={team} pricingMode={Pricing} />
						</Col>
					</Row>
				</Container>
			</section>

			{/* Client logo */}
			<LogosTopHeading2
				title="Loved by over 5 million users from companies like"
				logos={LogoList1}
			/>

			{/* FAQ */}
			<section className="py-lg-10 py-5">
				<Container>
					<Row>
						{/* Row */}
						<Col md={12} sm={12}>
							<div className="mb-8 text-center">
								<h2 className="h1">Frequently Asked Questions</h2>
							</div>
						</Col>
					</Row>
					{/* Row */}
					<Row>
						{/* FAQs List */}
						{FAQsData.map((item, index) => {
							return (
								<Col lg={4} md={6} sm={12} className="mb-3" key={index}>
									<h4>{item.question}</h4>
									<p>{item.answer}</p>
								</Col>
							);
						})}
						{/* Col */}
						<Col md={12} sm={12} className="mt-lg-10 mt-4">
							{/* Card*/}
							<Card>
								{/* Card body */}
								<Card.Body>
									<div className="d-lg-flex justify-content-between align-items-center">
										<h4 className="mb-0">Have other questions?</h4>
										<span>
											Send us a mail via:{' '}
											<Link
												href="https://codescandy.com/contact-us/"
												target="_blank"
											>
												support@example.com
											</Link>
										</span>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

		</Fragment>
	);
};

export default Pricing;
