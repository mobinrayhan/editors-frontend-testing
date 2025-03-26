// import node module libraries
import Link from 'next/link';
import { Image, Card } from 'react-bootstrap';

// import custom components
import { Avatar } from 'components/bootstrap/Avatar';

const Assignee = () => {
	return (
        <Card className="mb-4">
			<Card.Body className="py-3">
				<Card.Title as="h4">Assignee</Card.Title>
				<div className="d-flex align-items-center">
					<Image
						src={'/images/avatar/avatar-1.jpg'}
						alt=""
						className="avatar-md avatar rounded-circle"
					/>
					<div className="ms-3">
						<h4 className="mb-0">
							Marvin McKinney <small className="text-muted ">(Owner)</small>
						</h4>
					</div>
				</div>
			</Card.Body>
			<Card.Body className="border-top py-3">
				<Card.Title as="h4">Team</Card.Title>
				<div className="d-flex align-items-center">
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-1.jpg'}
						type="image"
						name="Paul Haney"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-2.jpg'}
						type="image"
						name="Gali Linear"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-3.jpg'}
						type="image"
						name="Mary Holler"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-4.jpg'}
						type="image"
						name="Lio Nordal"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-5.jpg'}
						type="image"
						name="Jamie Lova"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Avatar
						size="sm"
						src={'/images/avatar/avatar-6.jpg'}
						type="image"
						name="Mary Holler"
						className="rounded-circle"
						bodyClasses="me-2"
						imgtooltip
					/>
					<Link
                        href="#"
                        className="btn btn-icon btn-white border border-2 rounded-circle btn-dashed ms-2">
							+
					</Link>
				</div>
			</Card.Body>
		</Card>
    );
};

export default Assignee;
