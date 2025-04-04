'use client'

// import node module libraries
import Link from 'next/link';
import { Col, Row, Card, Breadcrumb, Nav, Tab } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode, PageHeadingDescription } from 'widgets';

// import react code data file
import { BasicBreadcrumb, BreadcrumbDivider } from 'data/code/BreadcrumbCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { breadcrumbsLinks } from 'data/docs/SidebarContentLinks';


const Breadcrumbs = () => {
	return (
		<DocsInnerLayout links={breadcrumbsLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Breadcrumb"
					description="Indicate the current page’s location within a navigational
									hierarchy that automatically adds separators via CSS."
				/>

				<div id="breadcrumb"></div>
				<hr className="mb-5 mt-7" />

				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Basic example</h3>
							<p>
								Add <code>active</code> prop to active{' '}
								<code>Breadcrumb.Item</code> . Do not set both <code>active</code>{' '}
								and <code>href</code> attributes. <code>active</code> overrides{' '}
								<code>href</code> and <code>span</code> element is rendered
								instead of <code>a</code>.
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
											<Breadcrumb>
												<Breadcrumb.Item active>Home</Breadcrumb.Item>
											</Breadcrumb>
											<Breadcrumb>
												<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
												<Breadcrumb.Item active>Library</Breadcrumb.Item>
											</Breadcrumb>
											<Breadcrumb>
												<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
												<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
												<Breadcrumb.Item active>Data</Breadcrumb.Item>
											</Breadcrumb>
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BasicBreadcrumb} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>

				<div id="dividers"></div>
				<hr className="mb-5 mt-7" />

				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Dividers</h3>
							<p>
								Dividers are automatically added in CSS through <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" target="_blank">::before <i className="fe fe-external-link"></i></Link> and content .
								They can be changed by modifying a local CSS custom property. We have created a new style named <code>.slash-breadcrumb</code> class to impliment the same.
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
											<div className='slash-breadcrumb'>
												<Breadcrumb>
													<Breadcrumb.Item active>Home</Breadcrumb.Item>
												</Breadcrumb>
												<Breadcrumb>
													<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
													<Breadcrumb.Item active>Library</Breadcrumb.Item>
												</Breadcrumb>
												<Breadcrumb>
													<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
													<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
													<Breadcrumb.Item active>Data</Breadcrumb.Item>
												</Breadcrumb>
											</div>
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BreadcrumbDivider} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>


			</div>
		</DocsInnerLayout>
	);
};
export default Breadcrumbs;
