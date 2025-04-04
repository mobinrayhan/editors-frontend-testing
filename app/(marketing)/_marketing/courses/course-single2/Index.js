'use client'

// import node module libraries
import React, { Fragment } from 'react';
import {
	Col,
	Row,
	Container,
	Card,
	Image,
	Nav,
	Tab
} from 'react-bootstrap';
import Link from 'next/link';

// import MDI icons
import Icon from '@mdi/react';
import { mdiAccountMultipleOutline } from '@mdi/js';

// import widget/custom components
import GKYouTube from 'widgets/video/GKYouTube';
import LevelIcon from 'widgets/miscellaneous/LevelIcon';
import { Ratings, GKAccordionProgress, GKTippy } from 'widgets';

// import sub components
import DescriptionTab from '../course-single/components/DescriptionTab';
import ReviewsTab from '../course-single/components/ReviewsTab';
import TranscriptTab from '../course-single/components/TranscriptTab';
import FAQTab from '../course-single/components/FAQTab';

// import data files
import { CourseIndex } from 'data/courses/CourseIndexData';

// import hooks
import useMounted from 'hooks/useMounted';

const CourseSingle2 = () => {
	const hasMounted = useMounted();
	return (
		<Fragment>

			<section className="py-lg-5 py-5">
				<Container>
					{/*  Video section  */}
					<Row>
						<Col lg={12} md={12} sm={12} className="mb-5">
							<div
								className="rounded-3 position-relative w-100 d-block overflow-hidden p-0"
								style={{ height: '600px' }}
							>
								<GKYouTube videoId="PkZNo7MFNFg" height="600" />
							</div>
						</Col>
					</Row>
					{/*  Content  */}
					<Row>
						<Col xl={8} lg={12} md={12} sm={12} className="mb-4 mb-xl-0">
							{/*  Card  */}
							{hasMounted ?
								<Tab.Container id="course-single2-tabs" defaultActiveKey="description">
									<Card className="mb-5">
										{/*  Card body  */}
										<Card.Body>
											<div className="d-flex justify-content-between align-items-center">
												<h1 className="fw-semi-bold mb-2">
													Getting Started with JavaScript
												</h1>
												<GKTippy content="Add to Bookmarks">
													<Link href="#"><i className="fe fe-bookmark fs-3 text-inherit"></i></Link>
												</GKTippy>
											</div>
											<div className="d-flex mb-5">
												<span>
													<span className="text-warning">
														<Ratings rating={4.5} />
													</span>
													<span className="fw-medium">(140)</span>
												</span>

												<span className="ms-4 d-none d-md-block">
													<LevelIcon level="Intermediate" />
													<span>Intermediate</span>
												</span>
												<span className="ms-4 d-none d-md-block">
													<Icon path={mdiAccountMultipleOutline} size={0.7} />{' '}
													<span>Enrolled</span>
												</span>
											</div>
											<div className="d-flex justify-content-between">
												<div className="d-flex align-items-center">
													<Image
														src="/images/avatar/avatar-1.jpg"
														className="rounded-circle avatar-md"
														alt=""
													/>
													<div className="ms-2 lh-1">
														<h4 className="mb-1">Kathryn Jones</h4>
														<p className="fs-6 mb-0">@kathrynjones</p>
													</div>
												</div>
												<div>
													<Link href="#" className="btn btn-outline-secondary btn-sm">
														Follow
													</Link>
												</div>
											</div>
										</Card.Body>
										{/*  Nav tabs  */}
										<Nav className="nav-lt-tab">
											{['Description', 'Reviews', 'Transcript', 'FAQ'].map(
												(item, index) => (
													<Nav.Item key={index}>
														<Nav.Link
															href={`#${item.toLowerCase()}`}
															eventKey={item.toLowerCase()}
															className="mb-sm-3 mb-md-0"
														>
															{item}
														</Nav.Link>
													</Nav.Item>
												)
											)}
										</Nav>
									</Card>
									{/*  Card  */}
									<Card className="rounded-3">
										{/*  Card body  */}
										<Card.Body className="p-0">
											<Tab.Content>
												<Tab.Pane eventKey="description" className="pb-4 p-4">
													{/* Description Tab */}
													<DescriptionTab />
												</Tab.Pane>
												<Tab.Pane eventKey="reviews" className="pb-4 p-4">
													{/* Reviews Tab */}
													<ReviewsTab />
												</Tab.Pane>
												<Tab.Pane eventKey="transcript" className="pb-4 p-4">
													{/* Transcript Tab */}
													<TranscriptTab />
												</Tab.Pane>
												<Tab.Pane eventKey="faq" className="pb-4 p-4">
													{/* FAQ Tab */}
													<FAQTab />
												</Tab.Pane>
											</Tab.Content>
										</Card.Body>
									</Card>
								</Tab.Container>
								: null}
						</Col>
						<Col xl={4} lg={12} md={12} sm={12}>
							<Card>
								<GKAccordionProgress accordionItems={CourseIndex} />
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default CourseSingle2;
