'use client'

// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Button, Badge, Tab, Nav } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';
import DotBadge from 'components/bootstrap/DotBadge';

// import react code data file
import {
	SimpleBadgeCode,
	BadgeWithButtonCode,
	PillBadgesCode,
	DotBadgeCode,
	PositionedBadgeCode
} from 'data/code/BadgesCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { badgeLinks } from 'data/docs/SidebarContentLinks';

const Badges = () => {
	return (
		<DocsInnerLayout links={badgeLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Badges"
					description="Documentation and examples for badges, our small count and
									labeling component."
				/>

				<div id="contextual-badge"></div>
				<hr className="mb-5 mt-7" />

				{/* Contextual  badges   */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Contextual badges</h3>
							<p>
								Add any of the below mentioned modifier classes to change the
								appearance of a badge.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<Badge bg="primary" className="me-1">
												primary
											</Badge>
											<Badge bg="secondary" className="me-1">
												secondary
											</Badge>
											<Badge bg="success" className="me-1">
												success
											</Badge>
											<Badge bg="danger" className="me-1">
												danger
											</Badge>
											<Badge bg="warning" className="me-1">
												warning
											</Badge>
											<Badge bg="info" className="me-1">
												info
											</Badge>
											<Badge bg="light" text="dark" className="me-1">
												light
											</Badge>
											<Badge bg="dark" className="me-1">
												dark
											</Badge>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={PillBadgesCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Contextual badges  */}

				<div id="pill-badge"></div>
				<hr className="mb-5 mt-7" />

				{/* Pill badges   */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Pill badges</h3>
							<p>
								Use the <code>pill</code> modifier to make badges more rounded
								(with a larger border-radius and additional horizontal padding).
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<Badge pill bg="primary" className="me-1">
												primary
											</Badge>
											<Badge pill bg="secondary" className="me-1">
												secondary
											</Badge>
											<Badge pill bg="success" className="me-1">
												success
											</Badge>
											<Badge pill bg="danger" className="me-1">
												danger
											</Badge>
											<Badge pill bg="warning" className="me-1">
												warning
											</Badge>
											<Badge pill bg="info" className="me-1">
												info
											</Badge>
											<Badge pill bg="light" text="dark" className="me-1">
												light
											</Badge>
											<Badge pill bg="dark" className="me-1">
												dark
											</Badge>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={PillBadgesCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Pill badges  */}

				<div id="simple-badge"></div>
				<hr className="mb-5 mt-7" />

				{/* simple badge  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Simple Badge </h3>
							<p>
								Badges scale to match the size of the immediate parent element by
								using relative font sizing and em units.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<h1>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>
											</h1>
											<h2>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>
											</h2>
											<h3>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>{' '}
											</h3>
											<h4>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>
											</h4>
											<h5>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>{' '}
											</h5>
											<h6>
												{' '}
												Example heading <Badge bg="secondary">New</Badge>
											</h6>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={SimpleBadgeCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of simple badge  */}

				<div id="buttons"></div>
				<hr className="mb-5 mt-7" />

				{/* badge with button  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Badge with Button</h3>
							<p>
								Badges can be used as part of links or buttons to provide a
								counter.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<Button variant="primary">
												Notifications{' '}
												<Badge bg="light" className="text-primary">
													4
												</Badge>
											</Button>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BadgeWithButtonCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of badge with button  */}

				<div id="dot-badge"></div>
				<hr className="mb-5 mt-7" />

				{/*  dot-badge  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} className="mb-5">
						<div className="mb-4">
							<h3>Dot</h3>
							<p>
								Use <code>&lt;DotBadge&gt;</code> component with{' '}
								<code>bg=* primary, secondary etc...</code> for dot badge color
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<DotBadge bg="primary" className='me-2'>Primary</DotBadge>
											<DotBadge bg="secondary" className='me-2'>Secondary</DotBadge>
											<DotBadge bg="success" className='me-2'>Success</DotBadge>
											<DotBadge bg="danger" className='me-2'>Danger</DotBadge>
											<DotBadge bg="warning" className='me-2'>Warning</DotBadge>
											<DotBadge bg="info" className='me-2'>Info</DotBadge>
											<DotBadge bg="light" className='me-2'>Light</DotBadge>
											<DotBadge bg="dark" className='me-2'>Dark</DotBadge>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={DotBadgeCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of dot-badge */}


				<div id="positioned-badge"></div>
				<hr className="mb-5 mt-7" />

				{/*  Positioned badge  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} className="mb-5">
						<div className="mb-4">
							<h3>Positioned</h3>
							<p>
								Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 ">
									<Nav className="nav-lb-tab">
										<Nav.Item>
											<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
												Design
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
												Code
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Card.Header>
								<Card.Body className="p-0">
									<Tab.Content>
										<Tab.Pane eventKey="all" className="pb-4 p-4">
											<Button type="button" className="btn btn-primary position-relative">
												Inbox
												<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
													99+
												</span>
											</Button>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={PositionedBadgeCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Positioned badge */}
			</div>
		</DocsInnerLayout>
	);
};
export default Badges;
