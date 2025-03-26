'use client'

// import node module libraries
import { Accordion, Col, Row } from 'react-bootstrap';

// import widget/custom components
import { GKTabs, HighlightCode, PageHeadingDescription } from 'widgets';

// import required layout
import DocsInnerLayout from "layouts/docs/DocsInnerLayout";

// import required data files
import { accordionLinks } from "data/docs/SidebarContentLinks";
import { AccordionBasicCode, AccordionFlushCode } from 'data/code/AccordionCode';

const Accordions = () => {

	const AccordionBasic = () => {
		return (
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Accordion Item #1</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 1.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Accordion Item #2</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 2.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Accordion Item #3</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 3.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		)
	}

	const AccordionFlush = () => {
		return (
			<Accordion defaultActiveKey="0" flush>
				<Accordion.Item eventKey="0">
					<Accordion.Header>Accordion Item #1</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 1.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Accordion Item #2</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 2.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>Accordion Item #3</Accordion.Header>
					<Accordion.Body>
						<strong>This is the accordion body of item 3.</strong>{' '}
						It is hidden by default, until the collapse plugin
						adds the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or
						overriding our default variables. It&apos;s also worth
						noting that just about any HTML can go within the{' '}
						<code>&lt;Accordion.Item&gt;</code> &rarr;{' '}
						<code>&lt;Accordion.Body&gt;</code> though the
						transition does limit overflow.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		)
	}
	return (
		<DocsInnerLayout links={accordionLinks} id="intro">
			<div className="docs-content mx-xxl-9" >
				<PageHeadingDescription
					title="Accordions"
					description="Build vertically collapsing accordions in combination with the Collapse component."
				/>

				<div id="accordion-example"  ></div>
				<hr className="mb-5 mt-7" />

				{/*  basic  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Example</h3>
							<p>
								Click the accordions below to expand/collapse the accordion
								content.
							</p>
						</div>
						<GKTabs
							tabs={[
								{ id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <AccordionBasic /> },
								{ id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={AccordionBasicCode} /> }
							]}
						/>
					</Col>
				</Row>
				{/* end of basic */}

				<div id="accordion-flush" ></div>
				<hr className="mb-5 mt-7" />

				{/*  basic  */}
				<Row>
					<Col xl={12} lg={12} md={12} sm={12}>
						<div className="mb-4">
							<h3>Flush</h3>
							<p>
								Add <code>flush</code> to remove the default background-color,
								some borders, and some rounded corners to render accordions
								edge-to-edge with their parent container.
							</p>
						</div>
						<GKTabs
							tabs={[
								{ id: 1, tabKey: 'design', tabTitle: 'Design', tabData: <AccordionFlush /> },
								{ id: 2, tabKey: 'code', tabTitle: 'Code', tabData: <HighlightCode code={AccordionFlushCode} /> }
							]}
						/>
					</Col>
				</Row>
				{/* end of basic */}
			</div>
		</DocsInnerLayout>
	);
};
export default Accordions;
