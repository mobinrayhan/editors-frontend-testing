// import node module libraries
import React from 'react';
import Link from 'next/link';
import { Card, Image, Dropdown } from 'react-bootstrap';

// import widget/custom components
import { GKTippy } from 'widgets';

const TeamGridCard = ({ item }) => {
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

	const ActionMenu = () => {
		return (
			<Dropdown as="span">
				<Dropdown.Toggle as={CustomToggle}>
					<i className="fe fe-more-horizontal fs-4"></i>
				</Dropdown.Toggle>
				<Dropdown.Menu align="start">
					<Dropdown.Header>SETTINGS</Dropdown.Header>
					<Dropdown.Item eventKey="1">
						<i className="fe fe-trash-2 dropdown-item-icon"></i>Remove
					</Dropdown.Item>
					<Dropdown.Item eventKey="2">
						<i className="fe fe-edit dropdown-item-icon"></i>Edit
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		);
	};

	return (
		<Card className="mb-4">
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="avatar avatar-lg">
						<Image src={item.image} className="rounded-circle" alt="" />
					</div>
					<div className="ms-3">
						<h4 className="mb-0">
							<Link href="#" className="text-inherit">
								{item.name}
							</Link>
						</h4>
						<p className="mb-0 text-muted">{item.topic}</p>
					</div>
				</div>

				<div className="mt-4 lh-1">
					<GKTippy content="Voice Call"  >
						<Link href="#" className="me-3 text-muted"><i className="fe fe-phone-call fs-4"></i></Link>
					</GKTippy>

					<GKTippy content="Video Call"  >
						<Link href="#" className="me-3 text-muted"><i className="fe fe-video fs-4"></i></Link>
					</GKTippy>

					<ActionMenu />
				</div>
			</Card.Body>
		</Card>
	);
};

export default TeamGridCard;
