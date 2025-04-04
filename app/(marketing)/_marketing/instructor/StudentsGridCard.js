'use client'

// import node module libraries
import React, { useState, Fragment } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';

// import data files
import { StudentsList } from 'data/users/StudentsData';
import { StudentEnrolledCard } from 'widgets';

const StudentsGridCard = () => {
	const [students, setStudentsList] = useState(StudentsList.slice(0, 500));

	// paging start
	const [pageNumber, setPageNumber] = useState(0);
	const studentsPerPage = 9;
	const pagesVisited = pageNumber * studentsPerPage;
	const pageCount = Math.ceil(students.length / studentsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayStudents = students
		.slice(pagesVisited, pagesVisited + studentsPerPage)
		.map((student, index) => {
			return (
				<Col xl={4} lg={4} md={6} sm={12} key={index}>
					<StudentEnrolledCard student={student} />
				</Col>
			);
		});
	// end of paging

	// searching code started

	const [searchTerm, setSearchTerm] = useState('');

	const getSearchTerm = (event) => {
		let searchTerm = event.target.value;
		setSearchTerm(searchTerm);
		if (searchTerm !== '') {
			const newStudentsList = StudentsList.filter((student) => {
				return Object.values(student)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setStudentsList(newStudentsList.slice(0, 500));
			setPageNumber(0);
		} else {
			setStudentsList(StudentsList.slice(0, 500));
		}
	};

	// end of searching

	return (
		<Fragment>
			<Row>
				<Col xl={12} lg={12} sm={12} className="mb-3">
					<Row>
						<Col className="pe-0">
							<Form.Group className="mb-3" controlId="formSearchbyName">
								<Form.Control
									placeholder="Search by Name"
									type="search"
									value={searchTerm}
									onChange={getSearchTerm}
								/>
							</Form.Group>
						</Col>
						<Col className="col-auto">
							<Link href="#" className="btn btn-secondary">
								Export CSV
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>

			<Row>
				{displayStudents.length > 0 ? (
					displayStudents
				) : (
					<Col>No matching students found.</Col>
				)}
			</Row>

			<ReactPaginate
				previousLabel={<ChevronLeft size="14px" />}
				nextLabel={<ChevronRight size="14px" />}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'justify-content-center mb-0 pagination'}
				previousLinkClassName={'page-link mx-1 rounded'}
				nextLinkClassName={'page-link mx-1 rounded'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link mx-1 rounded'}
				disabledClassName={'paginationDisabled'}
				activeClassName={'active'}
			/>
		</Fragment>
	);
};

export default StudentsGridCard;
