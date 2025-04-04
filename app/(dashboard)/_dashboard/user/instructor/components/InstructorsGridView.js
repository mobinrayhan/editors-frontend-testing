'use client'

// import node module libraries
import React, { Fragment, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Col, Row, Form } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import data files
import { InstructorData } from 'data/users/InstructorData';
import { StudentInstructorInfoCard } from 'widgets';

function InstructorsGridView() {
	const [instructors, setInstructorsList] = useState(
		InstructorData.slice(0, 500)
	);

	// paging start

	const [pageNumber, setPageNumber] = useState(0);
	const instructorsPerPage = 8;
	const pagesVisited = pageNumber * instructorsPerPage;
	const pageCount = Math.ceil(instructors.length / instructorsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayInstructors = instructors
		.slice(pagesVisited, pagesVisited + instructorsPerPage)
		.map((instructor, index) => {
			return (
				<Col xl={3} lg={6} md={6} sm={12} key={index}>
					<StudentInstructorInfoCard instructor={instructor} />
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
			const newInstructorsList = InstructorData.filter((instructor) => {
				return Object.values(instructor)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setInstructorsList(newInstructorsList.slice(0, 500));
			setPageNumber(0);
		} else {
			setInstructorsList(InstructorData.slice(0, 500));
		}
	};

	// end of searching code

	return (
		<Fragment>
			<div className="mb-4">
				<Form.Control
					type="search"
					placeholder="Search Instructors"
					value={searchTerm}
					onChange={getSearchTerm}
				/>
			</div>
			<Row>
				{displayInstructors.length > 0 ? (
					displayInstructors
				) : (
					<Col>No matching instructors found.</Col>
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
}

export default InstructorsGridView;
