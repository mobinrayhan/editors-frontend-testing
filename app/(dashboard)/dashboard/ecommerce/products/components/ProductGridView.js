// import node module libraries
import React, { Fragment, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'react-feather';

// import custom components
import ProductCard from './ProductCard';

// import widget/custom components
import { FormSelect } from 'widgets';

// import data files
import ProductsData from 'data/dashboard/ecommerce/ProductsData';

const ProductGridView = () => {
	const [products, setProductsList] = useState(ProductsData);
	const [pageNumber, setPageNumber] = useState(0);

	// paging start
	const productsPerPage = 8;
	const pagesVisited = pageNumber * productsPerPage;
	const pageCount = Math.ceil(products.length / productsPerPage);
	const changePage = ({ selected }) => { setPageNumber(selected); };

	const displayProducts = products
		.slice(pagesVisited, pagesVisited + productsPerPage)
		.map((product, index) => {
			return (
				<Col className="mb-4" key={index}>
					<ProductCard item={product} />
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
			const newProductsList = ProductsData.filter((product) => {
				return Object.values(product)
					.join(' ')
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setProductsList(newProductsList.slice(0, 500));
			setPageNumber(0);
		} else {
			setProductsList(ProductsData.slice(0, 500));
		}
	};
	// end of searching code

	// Filter options
	const filterOptions = [
		{ value: 'Featured', label: 'Featured' },
		{ value: 'Newest', label: 'Newest' },
		{ value: 'Price: High-Low', label: 'Price: High-Low' },
		{ value: 'Price: Low-High', label: 'Price: Low-High' }
	];

	return (
		<Fragment>
			<div className="mb-4">
				<Row className="justify-content-between">
					<Col xxl={2} lg={3} md={5} xs={12} className="mb-2 mb-lg-0">
						<Form.Control
							type="search"
							placeholder="Search Products"
							value={searchTerm}
							onChange={getSearchTerm}
						/>
					</Col>
					<Col xxl={3} lg={5} md={7} xs={12}>
						<Row className="justify-content-md-end">
							<label className="col-auto col-form-label">Sorting</label>
							<Col xs="auto">
								<Form.Control as={FormSelect} placeholder="Filter" options={filterOptions} />
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
			<Row className="row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">
				{displayProducts.length > 0 ? (
					displayProducts
				) : (
					<Col>No matching products are found.</Col>
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
	)
}

export default ProductGridView