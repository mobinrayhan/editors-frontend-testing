// import node module libraries
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { Col, Container, Row } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import widget/custom components
import { MentorSummaryCard } from 'widgets'

// import data files
import MentorListData from 'data/marketing/mentor/MentorListData'

const ListOfMentors = () => {

    const [Records] = useState(MentorListData);

    // paging setup start
    const [pageNumber, setPageNumber] = useState(0);
    const RecordsPerPage = 5;
    const pagesVisited = pageNumber * RecordsPerPage;
    const pageCount = Math.ceil(Records.length / RecordsPerPage);
    const changePage = ({ selected }) => { setPageNumber(selected) };
    const displayRecords = Records.slice(pagesVisited, pagesVisited + RecordsPerPage)?.map((record, index) => {
        return (<MentorSummaryCard key={index} mentor={record} />);
    });

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToTop();
    }, [pageNumber]); // Re-run the effect when pageNumber changes
    // end of paging setup

    return (
        <section className="pb-xl-8 pb-6 bg-white">
            <Container>
                <Row>
                    <Col xs={12}>
                        {/* Divider */}
                        <hr className='my-5' />

                        <div className="mb-4"><h2 className="mb-0 h5">{Records.length} mentors found</h2></div>
                    </Col>

                    <Col lg={12}>
                        {displayRecords.length > 0 ? displayRecords : 'No matching records found.'}
                    </Col>
                </Row>
                <div>
                    <ReactPaginate
                        previousLabel={<ChevronLeft size="14px" />}
                        nextLabel={<ChevronRight size="14px" />}
                        pageRangeDisplayed={0}
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
                </div>

            </Container>
        </section>
    )
}

export default ListOfMentors