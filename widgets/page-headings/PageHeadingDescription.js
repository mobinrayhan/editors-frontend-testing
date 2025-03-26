// import node module libraries
import { Col, Row } from 'react-bootstrap';

const PageHeading = (props) => {
	const { title, description } = props;
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<div className="pb-0 mb-0 d-md-flex align-items-center justify-content-between">
					<div className="mb-3 mb-md-0">
						<h1 className="mb-2 fw-bold display-3"
							dangerouslySetInnerHTML={{ __html: title }} />
						<p
							className="mb-0 lead"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</div>
			</Col>
		</Row>
	);
};

export default PageHeading;
