// import node module libraries
import React from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

const Pagination = ({table}) => {
	return (
		<Row>
			<Col lg={12} md={12} sm={12}>
				<div className="pb-5">
					<nav>
						<ListGroup
							as="ul"
							bsPrefix="pagination"
							className="justify-content-center mb-0"
						>
							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									onClick={() => table.setPageIndex(0)}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-left"></i>
								</Button>
							</ListGroup.Item>
							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									disabled={!table.getCanPreviousPage()}
									onClick={() => table.previousPage()}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-left"></i>
								</Button>
							</ListGroup.Item>							
							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									 disabled={!table.getCanNextPage()}
									 onClick={() => table.nextPage()}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-right"></i>
								</Button>
							</ListGroup.Item>

							<ListGroup.Item as="li" bsPrefix="page-item">
								<Button
									onClick={() => table.setPageIndex(table.getPageCount() - 1)}
									className="page-link mx-1 rounded"
								>
									<i className="fe fe-chevron-right"></i>
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</nav>
				</div>
			</Col>
		</Row>
	);
};

export default Pagination;
