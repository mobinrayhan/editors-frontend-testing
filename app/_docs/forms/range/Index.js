'use client'

// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form } from 'react-bootstrap';

// import widget/custom components
import { PageHeadingDescription, HighlightCode } from 'widgets';

// import react code file
import { BasicRangeCode } from 'data/code/forms/RangeControlCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { formRangeLinks } from 'data/docs/SidebarContentLinks';

const Range = () => {
	return (
		<DocsInnerLayout links={formRangeLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Range"
					description="Use our custom range inputs for consistent cross-browser styling and built-in customization."
				/>

				<div id='overview'></div>
				<hr className="mb-5 mt-7" />

				{/*  overview */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Overview</h3>
							<p>
								Create custom <code>&lt;input type=&#34;range&#34;&gt;</code> controls
								with <code>&lt;FormRange&gt;</code>. The track (the background)
								and thumb (the value) are both styled to appear the same across
								browsers. As only Firefox supports “filling” their track from the
								left or right of the thumb as a means to visually indicate
								progress, we do not currently support it.
							</p>
						</div>

						<Tab.Container defaultActiveKey="all">
							<Card>
								<Card.Header className="border-bottom-0 p-0 bg-white">
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
											{/* overview code started */}
											<Form>
												<Form.Label>Range</Form.Label>
												<Form.Range />
											</Form>
											{/* end of overview code */}
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BasicRangeCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of overview */}
			</div>
		</DocsInnerLayout>
	);
};

export default Range;
