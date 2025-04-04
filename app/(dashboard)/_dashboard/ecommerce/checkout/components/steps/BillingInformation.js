// import node module libraries
import { Row, Col, Form, Button } from 'react-bootstrap';

// import widget/custom components
import { FormSelect } from 'widgets';

const BillingInformation = (props) => {
	const { next } = props;

	const countryOptions = [
		{ value: 'India', label: 'India' },
		{ value: 'UK', label: 'UK' },
		{ value: 'US', label: 'US' }
	];
	return (
		<Form>
			<div className="bs-stepper-content">
				{/* Content one */}
				<div role="tabpanel" className="bs-stepper-pane active dstepper-block">
					{/* heading */}
					<div className="mb-5">
						<h3 className="mb-1">Billing Information</h3>
						<p className="mb-0">Please fill all information below
						</p>
					</div>
					<Row className="gx-3">
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
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control type="email" id="email" placeholder="Enter email address" />
						</Col>
						<Col md={6} className="mb-3">
							{/* Phone */}
							<Form.Label htmlFor="phone">Phone</Form.Label>
							<Form.Control type="text" placeholder="Enter phone number" id="phone" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Address */}
							<Form.Label htmlFor="address">Address</Form.Label>
							<Form.Control type="text" placeholder="Enter address" id="address" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Town / City */}
							<Form.Label htmlFor="town">Town / City</Form.Label>
							<Form.Control type="text" placeholder="Enter City" id="town" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* State */}
							<Form.Label htmlFor="state">State</Form.Label>
							<Form.Control type="text" placeholder="Enter State" id="state" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* Zip / Postal Code */}
							<Form.Label htmlFor="zip">Zip / Postal Code</Form.Label>
							<Form.Control type="text" placeholder="Zip / Postal Code" id="zip" />
						</Col>
						<Col xs={12} className="mb-3">
							{/* select country */}
							<Form.Label htmlFor="country">Country</Form.Label>
							<Form.Control as={FormSelect} id="country" placeholder="Select Country" options={countryOptions} />
						</Col>
						{/* checkbox */}
						<Col xs={12} className="mb-3">
							{/* shipping address confirmation chechbox */}
							<Form.Check
								type="checkbox"
								id="shipAddress"
								label="Ship to different address ?"
								value=""
							/>
						</Col>
					</Row>

					{/* Button */}
					<div className="d-flex justify-content-end">
						<Button variant="primary" onClick={next}>
							Proceed to Shipping <i className="fe fe-shopping-bag ms-1"></i>
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};
export default BillingInformation;
