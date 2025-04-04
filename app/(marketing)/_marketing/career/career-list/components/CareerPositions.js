// import node module libraries
import Link from 'next/link';
import { Col, Row, Container, Form, Table } from 'react-bootstrap';

// import widget/custom components
import { FormSelect, GKPositionListTable } from 'widgets';

// import data files
import PositionListData from 'data/marketing/career/PositionListData';

const CareerPositions = () => {
	const offices = [
		{ value: 'San Francisco', label: 'San Francisco' },
		{ value: 'United Kingdom', label: 'United Kingdom' },
		{ value: 'Canada', label: 'Canada' },
		{ value: 'Ireland', label: 'Ireland' }
	];

	const team = [
		{ value: 'Design', label: 'Design' },
		{ value: 'Engineering', label: 'Engineering' },
		{ value: 'General & Administrative', label: 'General & Administrative' }
	];

	return (
		<section className="pb-14 pt-8 pt-lg-0 bg-white " id="position">
			<Container>
				<Row>
					<Col xl={8} lg={10} md={12} xs={12}>
						{/* heading */}
						<h1 className="display-4  mt-2 mb-3 fw-bold">All open positions</h1>
						{/* para */}
						<p className="fs-3 pe-lg-14">
							We are looking for enthusiastic collaborators who are passionate
							about their craft to be a part of our journey building technology
							that is a force for positive change in the world.{' '}
						</p>
						{/* filter menu */}
						<Row className="mt-8">
							<div className="col-12">
								<h4>Filter by:</h4>
							</div>
							<Col lg={6} md={6} xs={12} className="mt-3 mt-lg-0">
								<Form.Group className="mb-3" controlId="formOffices">
									<Form.Control
										as={FormSelect}
										placeholder="Offices"
										options={offices}
									/>
								</Form.Group>
							</Col>
							<Col lg={6} md={6} xs={12} className="mt-3 mt-lg-0">
								<Form.Group className="mb-3" controlId="formTeam">
									<Form.Control
										as={FormSelect}
										placeholder="Team"
										options={team}
									/>
								</Form.Group>
							</Col>
						</Row>
					</Col>
				</Row>

				{PositionListData.map((item, index) => {
					return <GKPositionListTable item={item} key={index} />
				})}

				{/* cta */}
				<Row className="mt-12">
					<div className="col-12 text-center">
						<p>
							Don&apos;t see the job you want? <Link href="#">Let us know</Link>
						</p>
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default CareerPositions;
