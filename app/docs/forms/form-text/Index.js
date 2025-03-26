'use client'

// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form } from 'react-bootstrap';

// import widget/custom components
import { PageHeadingDescription, HighlightCode } from 'widgets';

// import react code file
import { BasicFormControlCode } from 'data/code/forms/FormTextCode';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { formTextLinks } from 'data/docs/SidebarContentLinks';

const FormText = () => {
	return (
		<DocsInnerLayout links={formTextLinks} id="intro">
			<div className="docs-content mx-xxl-9">
				<PageHeadingDescription
					title="Form Text"
					description="Create block-level or inline-level form text."
				/>

				<div id='basic-example'></div>
				<hr className="mb-5 mt-7" />

				{/*  basic example */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Example</h3>
							<p>
								Block-level help text in forms can be created using{' '}
								<code>&lt;Form.Text&gt;</code>. Inline help text can be flexibly
								implemented using any inline HTML element and utility classes like{' '}
								<code>.text-muted</code>.
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
											{/* basic example code started */}
											<Form>
												<Form.Label htmlFor="inputPassword5">Password</Form.Label>
												<Form.Control
													type="password"
													id="inputPassword5"
													aria-describedby="passwordHelpBlock"
												/>
												<Form.Text id="passwordHelpBlock" muted>
													Your password must be 8-20 characters long, contain
													letters and numbers, and must not contain spaces,
													special characters, or emoji.
												</Form.Text>
											</Form>
											{/* end of basic example code */}
										</Tab.Pane>

										<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
											<HighlightCode code={BasicFormControlCode} />
										</Tab.Pane>
									</Tab.Content>
								</Card.Body>
							</Card>
						</Tab.Container>
					</Col>
				</Row>
				{/* end of basic */}
			</div>
		</DocsInnerLayout>
	);
};

export default FormText;
