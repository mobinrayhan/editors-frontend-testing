'use client'

// import node module libraries
import React from 'react';
import { Col, Row, Card, Dropdown } from 'react-bootstrap';
import Link from 'next/link';

// import widget/custom components
import { FlatPickr, ApexCharts, StatRightIcon } from 'widgets';

// import sub components
import PopularInstructor from './components/PopularInstructor';
import RecentCourses from './components/RecentCourses';
import Activity from './components/Activity';

// import data files
import {
	TrafficChartSeries,
	TrafficChartOptions,
	EarningsChartSeries,
	EarningsChartOptions
} from 'data/charts/ChartData';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	(<Link
		href=""
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
		className="btn-icon btn btn-ghost btn-sm rounded-circle">
		{children}
	</Link>)
));

CustomToggle.displayName = 'CustomToggle';

const ChartActionMenu = () => {
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-vertical text-muted"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="end">
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<i className="fe fe-external-link dropdown-item-icon "></i> Export
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<i className="fe fe-mail dropdown-item-icon "></i> Email Report
					</Dropdown.Item>
					<Dropdown.Item eventKey="3">
						<i className="fe fe-download dropdown-item-icon "></i> Download
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

const Overview = () => {
	return (
		<div>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-lg-flex justify-content-between align-items-center">
						<div className="mb-3 mb-lg-0">
							<h1 className="mb-0 h2 fw-bold">Dashboard</h1>
						</div>
						<div className="d-flex">
							<div className="input-group me-3  ">
								<FlatPickr value={''} />
								<span className="input-group-text text-muted" id="basic-addon2">
									<i className="fe fe-calendar"></i>
								</span>
							</div>
							<Link href="#" className="btn btn-primary">
								Setting
							</Link>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightIcon
						title="SALES"
						value="$10,800"
						summary="Number of sales"
						summaryValue="+20.9$"
						summaryIcon="up"
						showSummaryIcon
						iconName="shopping-bag"
						iconColorVariant="primary"
						classValue="mb-4"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightIcon
						title="COURSES"
						value="2,456"
						summary="Number of pending"
						summaryValue="120+"
						summaryIcon="down"
						iconName="book-open"
						iconColorVariant="primary"
						classValue="mb-4"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightIcon
						title="STUDENTS"
						value="1,22,456"
						summary="Students"
						summaryValue="+1200"
						summaryIcon="up"
						showSummaryIcon
						iconName="users"
						iconColorVariant="primary"
						classValue="mb-4"
					/>
				</Col>

				<Col xl={3} lg={6} md={12} sm={12}>
					<StatRightIcon
						title="INSTRUCTOR"
						value="22,786"
						summary="Instructor"
						summaryValue="+200"
						summaryIcon="up"
						showSummaryIcon
						iconName="user-check"
						iconColorVariant="primary"
						classValue="mb-4"
					/>
				</Col>
			</Row>

			<Row>
				<Col xl={8} lg={12} md={12} className="mb-4">
					<Card>
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0">Earnings</h4>
							</div>
							<div>
								<ChartActionMenu />
							</div>
						</Card.Header>
						<Card.Body>
							<ApexCharts
								options={EarningsChartOptions}
								series={EarningsChartSeries}
								type="line"
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4} lg={12} md={12} className="mb-4">
					<Card>
						<Card.Header className="align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0">Traffic</h4>
							</div>
							<div>
								<ChartActionMenu />
							</div>
						</Card.Header>
						<Card.Body className="py-lg-7">
							<div id="chart">
								<ApexCharts
									options={TrafficChartOptions}
									series={TrafficChartSeries}
									type="donut"
								/>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row>
				<Col xl={4} lg={6} md={12} className="mb-4">
					<PopularInstructor title="Popular Instructor" />
				</Col>
				<Col xl={4} lg={6} md={12} className="mb-4">
					<RecentCourses title="Recent Courses" />
				</Col>

				<Col xl={4} lg={6} md={12} className="mb-4">
					<Activity title="Activity" />
				</Col>
			</Row>
		</div>
	);
};

export default Overview;
