'use client'

// import node module libraries
import { Fragment, useState } from 'react';
import {
	Col,
	Row,
	Card,
	Button,
	Collapse,
	Fade,
	Tab,
	Nav
} from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import react code data file
import { FadeCollapses, BasicCollapsesCode, HorizontalCollapsesCode } from 'data/code/CollapsesCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { collapseLinks } from 'data/docs/SidebarContentLinks';

const Collapses = () => {
	const [open, setOpen] = useState(false);
	const [openFade, setOpenFade] = useState(false);
	const [openHorizontal, setOpenHorizontal] = useState(false);

	return (
		<DocsInnerLayout links={collapseLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Collapse"
					description="Add a collapse toggle animation to an element or component."
				/>

				<div id="basic-example"></div>
				<hr className="mb-5 mt-5" />

				{/*  Collapses */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3 className="doc-section-head-title">Basic Example</h3>
							<p className="mb-0">
								Add a collapse toggle animation to an element or component.
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
											<Button
												onClick={() => setOpen(!open)}
												aria-controls="example-collapse-text"
												aria-expanded={open}
											>
												Toggle Button
											</Button>
											<Collapse in={open}>
												<div id="example-collapse-text" className="pt-3">
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. Nihil anim
													keffiyeh helvetica, craft beer labore wes anderson cred
													nesciunt sapiente ea proident.
												</div>
											</Collapse>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BasicCollapsesCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Collapses */}

				<div id="horizontal"></div>
				<hr className="mb-5 mt-5" />

				{/*  Horizontal */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3 className="doc-section-head-title">Horizontal</h3>
							<p className="mb-0">
								Add a collapse toggle animation to an element or component to transition the width instead of height.
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
											<Button
												onClick={() => setOpenHorizontal(!openHorizontal)}
												aria-controls="example-collapse-text"
												aria-expanded={openHorizontal}
											>
												click
											</Button>
											<div style={{ minHeight: '150px' }}>
												<Collapse in={openHorizontal} dimension="width">
													<div id="example-collapse-text">
														<Card body style={{ width: '400px' }}>
															Anim pariatur cliche reprehenderit, enim eiusmod high life
															accusamus terry richardson ad squid. Nihil anim keffiyeh
															helvetica, craft beer labore wes anderson cred nesciunt sapiente
															ea proident.
														</Card>
													</div>
												</Collapse>
											</div>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={HorizontalCollapsesCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Horizontal */}


				<div id='fade'></div>
				<hr className="mb-5 mt-7" />

				{/*  Fade Collapses */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3 className="doc-section-head-title">Fade</h3>
							<p className="mb-0">
								Add a fade animation to a child element or component.
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
											<Button
												onClick={() => setOpenFade(!openFade)}
												aria-controls="example-fade-text"
												aria-expanded={openFade}
											>
												Toggle text
											</Button>
											<Fade in={openFade}>
												<div id="example-fade-text" className="pt-4">
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. Nihil anim
													keffiyeh helvetica, craft beer labore wes anderson cred
													nesciunt sapiente ea proident.
												</div>
											</Fade>
										</Tab.Pane>
										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={FadeCollapses} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of Fade Collapses */}
			</div>
		</DocsInnerLayout>
	);
};

export default Collapses;
