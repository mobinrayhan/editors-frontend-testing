'use client'

// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, CloseButton, Nav, Tab } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import react code data file
import {
	GenericCloseButtonCode,
	DisabledStateCode,
	WhiteVariantCode
} from 'data/code/CloseCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { closeButtonsLinks } from 'data/docs/SidebarContentLinks';

const CloseButtons = () => {
	return (
		<DocsInnerLayout links={closeButtonsLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Close Buttons"
					description="A generic close button for dismissing content like modals and
									alerts."
				/>

				<div id="basic-example"></div>
				<hr className="mb-5 mt-5" />

				{/* generic close button */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Examples</h3>
							<p className="mb-0">
								Provide an option to dismiss or close a component with{' '}
								<code>&lt;CloseButton&gt;</code>.
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
											<CloseButton className="btn-close" />
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={GenericCloseButtonCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of generic close button */}

				<div id='disabled-state'></div>
				<hr className="mb-5 mt-7" />

				{/* Disabled state */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Disabled state</h3>
							<p>
								Bootstrap adds relevant styling to a disabled close button to
								prevent user interactions.
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
											<CloseButton className="btn-close" disabled />
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={DisabledStateCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Disabled state*/}

				<div id='white-variant'></div>
				<hr className="mb-5 mt-7" />

				{/* White variant */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12} className="mb-5">
						<div className="mb-4">
							<h3>White variant</h3>
							<p>
								Change the default dark color to white using{' '}
								<code>variant=&#34;white&#34;</code>.
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
											<div className="bg-dark p-3">
												<CloseButton className="btn-close" variant="white" />
												<CloseButton
													className="btn-close"
													variant="white"
													disabled
												/>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={WhiteVariantCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of White variant */}
			</div>
		</DocsInnerLayout>
	);
};

export default CloseButtons;
