// import node module libraries
import { useState } from 'react';
import {
	Row,
	Col,
	Card,
	Form,
	Button,
	Image,
	Modal
} from 'react-bootstrap';

// import widget/custom components
import { FormSelect } from 'widgets';

const ShippingInformation = (props) => {
	const { next, previous } = props;
	const [modalShow, setModalShow] = useState(false);

	const countryOptions = [
		{ value: 'India', label: 'India' },
		{ value: 'UK', label: 'UK' },
		{ value: 'US', label: 'US' }
	];

	const AddNewAddressModal = (props) => {
		return (
			<Modal
				{...props}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body>
					<Row>
						<Col md={6} className="mb-3">
							{/* First Name */}
							<Form.Label htmlFor="firstname">First Name</Form.Label>
							<Form.Control type="text" id="firstname" placeholder="Enter first name" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Last Name */}
							<Form.Label htmlFor="lastName">Last Name</Form.Label>
							<Form.Control type="text" id="lastName" placeholder="Enter last name" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Email */}
							<Form.Label htmlFor="email">Email (Optional)</Form.Label>
							<Form.Control type="email" id="email" placeholder="Enter email address" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Phone */}
							<Form.Label htmlFor="phone">Phone</Form.Label>
							<Form.Control type="text" placeholder="Enter phone number" id="phone" />
						</Col>
						<Col xs={6} className="mb-3">
							{/* Address */}
							<Form.Label htmlFor="address">Address</Form.Label>
							<Form.Control type="text" placeholder="Enter address" id="address" />
						</Col>
						<Col xs={6} className="mb-3">
							{/* Town / City */}
							<Form.Label htmlFor="town">Town / City</Form.Label>
							<Form.Control type="text" placeholder="Enter City" id="town" />
						</Col>
						<Col xs={6} className="mb-3">
							{/* State */}
							<Form.Label htmlFor="state">State</Form.Label>
							<Form.Control type="text" placeholder="Enter State" id="state" />
						</Col>
						<Col xs={6} className="mb-3">
							{/* Zip / Postal Code */}
							<Form.Label htmlFor="zip">Zip / Postal Code</Form.Label>
							<Form.Control type="text" placeholder="Zip / Postal Code" id="zip" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* select country */}
							<Form.Label htmlFor="country">Country</Form.Label>
							<Form.Control as={FormSelect} id="country" placeholder="Select Country" options={countryOptions} />
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={props.onHide}>Close</Button>
					<Button onClick={props.onHide}>Save Changes</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	return (
		<Form>
			{/* Content for second tab */}
			<div className="bs-stepper-content">
				<div role="tabpanel" className="bs-stepper-pane" >
					<div className="mb-5">
						<h3 className="mb-1">Shipping Information</h3>
						<p className="mb-0">Fill the form below in order to send you the orders invoice.
						</p>
					</div>
					<div className="d-flex justify-content-between align-items-center mb-2">
						<h4 className="mb-0">Saved Address</h4>
						<Button variant="secondary" onClick={() => setModalShow(true)}>
							Add new address
						</Button>

						<AddNewAddressModal
							show={modalShow}
							onHide={() => setModalShow(false)}
						/>

					</div>
					<Row>
						<Col lg={6} xs={12} className="mb-4">
							<div className="border p-4 rounded-3">
								<Form.Check className="mb-2">
									<Form.Check.Input type="radio" name="addressRadio" id="addressRadio1" />
									<Form.Check.Label className="text-dark fw-semibold" >Home</Form.Check.Label>
									<p className="mb-0">
										3812 Orchard Street<br />
										Bloomington,<br />
										Minnesota 55431,<br />
										United States
									</p>
								</Form.Check>
							</div>
						</Col>
						<Col lg={6} xs={12} className="mb-4">
							<div className="border p-4 rounded-3">
								<Form.Check className="mb-2">
									<Form.Check.Input type="radio" name="addressRadio" id="addressRadio2" />
									<Form.Check.Label className="text-dark fw-semibold" >Office</Form.Check.Label>
									<p className="mb-0">
										3853 Coal Road<br />
										Tannersville, <br />
										Pennsylvania, 18372 <br />
										United States</p>
								</Form.Check>
							</div>
						</Col>
					</Row>
					<div>
						<h4 className="mb-4">Shipping Method</h4>
						<Card className="card-bordered shadow-none mb-2">
							<Card.Body>
								<div className="d-flex">
									<Form.Check className="mb-2" >
										<Form.Check.Input type="radio" name="shippingMethod" id="freeDelivery" />
										<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
									</Form.Check>
									<div className="">
										<h5 className="mb-1"> Free Delivery</h5>
										<span className="fs-6">Expected Delivery 3 to 5 Days</span>
									</div>
								</div>
							</Card.Body>
						</Card>
						<Card className="card-bordered shadow-none mb-2">
							<Card.Body>
								<div className="d-md-flex">
									<Form.Check className="mb-2">
										<Form.Check.Input type="radio" name="shippingMethod" id="nextDelivery" />
										<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
									</Form.Check>
									<div className="d-flex justify-content-between align-items-center w-100">
										<div className="d-flex align-items-start">
											<Image src='/images/svg/payment-logo-fedex.svg' alt="" />
											<div className="ms-2">
												<h5 className="mb-1"> FedEx Next Day Delivery</h5>
												<p className="mb-0 fs-6">No Delivery on Public Holidays</p>
											</div>
										</div>
										<div><h3 className="mb-0">$19.99</h3></div>
									</div>
								</div>
							</Card.Body>
						</Card>
						<Card className="card-bordered shadow-none">
							<Card.Body>
								<div className="d-md-flex">
									<Form.Check className="mb-2">
										<Form.Check.Input type="radio" name="shippingMethod" id="DHLExpress" />
										<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
									</Form.Check>
									<div className="d-flex justify-content-between align-items-center w-100">
										<div className="d-flex align-items-start">
											<Image src='/images/svg/payment-logo-dhl.svg' alt="" />
											<div className="ms-2">
												<h5 className="mb-1">DHL Express</h5>
												<p className="mb-0 fs-6">1 Day Delivery</p>
											</div>
										</div>
										<div><h3 className="mb-0">$8.99</h3></div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="d-md-flex justify-content-between  mt-4">
						<Button variant='outline-primary' className="mb-2 mb-md-0" onClick={previous}>
							Back to Info
						</Button>
						<Button onClick={next}>
							Continue to Payment <i className="fe fe-credit-card ms-2"></i>
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};
export default ShippingInformation;


