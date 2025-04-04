'use client'

// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	OverlayTrigger,
	Popover,
	Button,
	Nav,
	Tab
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import react code data file
import {
	DefaultPopoverCode,
	FourDirectionsCode,
	DismissableCode
} from 'data/code/PopoversCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { popoversLinks } from 'data/docs/SidebarContentLinks';

const Popovers = () => {
	return (
		<DocsInnerLayout links={popoversLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Popover"
					description="Documentation and examples for adding Bootstrap popovers, like
									those found in iOS, to any element on your site."
				/>

				<div id="default-popover"></div>
				<hr className="mb-5 mt-7" />

				{/* default-popover */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Default Popovers</h3>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0">
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
											<OverlayTrigger
												trigger="click"
												placement="right"
												overlay={
													<Popover id="popover-basic">
														<Popover.Header as="h3">Popover title</Popover.Header>
														<Popover.Body>
															And here&apos;s some amazing content. It&apos;s very engaging.
															Right?
														</Popover.Body>
													</Popover>
												}
											>
												<Button variant="danger">Click to toggle popover</Button>
											</OverlayTrigger>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={DefaultPopoverCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of default-popover */}

				<div id="four-direction" ></div>
				<hr className="mb-5 mt-7" />

				{/* four-direction */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Four directions</h3>
							<p>
								Four options are available: top, right, bottom, and left aligned.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0">
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
											{['top', 'right', 'bottom', 'left'].map((placement) => (
												<OverlayTrigger
													trigger="click"
													key={placement}
													placement={placement}
													overlay={
														<Popover id={`popover-positioned-${placement}`}>
															<Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
															<Popover.Body>
																<strong>Holy guacamole!</strong> Check this info.
															</Popover.Body>
														</Popover>
													}
												>
													<Button
														variant="secondary"
														className="me-2 mb-2 mb-lg-0"
													>
														Popover on {placement}
													</Button>
												</OverlayTrigger>
											))}
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={FourDirectionsCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of four-direction */}

				<div id="dismiss-on-next-click"></div>
				<hr className="mb-5 mt-7" />

				{/* dismiss on next click */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} className="mb-4">
						<div className="mb-4">
							<h3>Dismiss on next click</h3>
							<p>
								Use the <code>trigger=&#34;focus&#34;</code> trigger to dismiss popovers
								on the user’s next click of a different element than the toggle
								element.
							</p>
						</div>
						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0">
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
											<OverlayTrigger
												trigger="focus"
												placement="right"
												overlay={
													<Popover id="popover-basic">
														<Popover.Header as="h3">Popover title</Popover.Header>
														<Popover.Body>
															And here&apos;s some amazing content. It&apos;s very engaging.
															Right?
														</Popover.Body>
													</Popover>
												}
											>
												<Button variant="danger">Dismissible popover</Button>
											</OverlayTrigger>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={DismissableCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of dismiss on next click */}
			</div>
		</DocsInnerLayout>
	);
};

export default Popovers;
