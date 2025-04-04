// import node module libraries
import { Offcanvas } from 'react-bootstrap'

// import sub component
import FilterOptions from './FilterOptions'

const OffcanvasFilter = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement='bottom'
            className="offcanvas-xl h-auto start-0 mx-2 mb-2 rounded-3 bottom-md-50" >
            <Offcanvas.Header closeButton className='pb-0'>
                <Offcanvas.Title as="h3">
                    Search Mentors
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-grid'>
                <FilterOptions />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasFilter