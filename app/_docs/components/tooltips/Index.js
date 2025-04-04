'use client'

// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	OverlayTrigger,
	Tooltip,
	Button,
	Nav,
	Tab
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import react code data file
import { BasicTooltip } from 'data/code/TooltipsCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { tooltipsLinks } from 'data/docs/SidebarContentLinks';

const Tooltips = () => {
	return (
		<DocsInnerLayout links={tooltipsLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Tooltips"
					description="Documentation and examples for adding custom Bootstrap tooltips.
									A tooltip component for a more stylish alternative to that
									anchor tag <code>title</code> attribute."
				/>

				<div id="tooltips"></div>
				<hr className="mb-5 mt-7" />

				{/* tooltips */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Examples</h3>
							<p>
								Hover over the buttons below to see the four tooltips directions:
								top, right, bottom, and left. You can pass the{' '}
								<code>Overlay</code> injected props directly to the Tooltip
								component.
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
													key={placement}
													placement={placement}
													overlay={
														<Tooltip id={`tooltip-${placement}`}>
															Tooltip on <strong>{placement}</strong>.
														</Tooltip>
													}
												>
													<Button
														variant="secondary"
														className="me-1 mb-2 mb-lg-0"
													>
														Tooltip on {placement}
													</Button>
												</OverlayTrigger>
											))}
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BasicTooltip} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of tooltips */}
			</div>
		</DocsInnerLayout>
	);
};

export default Tooltips;
