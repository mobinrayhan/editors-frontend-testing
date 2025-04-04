// import node module libraries
import Link from 'next/link';
import { useHookFormMask } from 'use-mask-input';
import { useForm } from 'react-hook-form';
import { Card, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const PaymentSelection = (props) => {
	const { register } = useForm();
	const registerWithMask = useHookFormMask(register);
	const { previous } = props;
	return (
		<Form>
			<div className="bs-stepper-content">
				{/* Content three */}
				<div role="tabpanel" className="bs-stepper-pane ">
					{/* Card */}
					<div className="mb-5">
						<h3 className="mb-1">Payment selection</h3>
						<p className="mb-0">Please select and enter your billing information.
						</p>
					</div>

					{/* Paypal Payment Method */}
					<Card className="card-bordered shadow-none mb-2">
						<Card.Body>
							<div className="d-flex">
								<Form.Check className="mb-2">
									<Form.Check.Input type="radio" name="paymentMethod" id="paypal" />
									<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
								</Form.Check>
								<div>
									<h5 className="mb-1"> Payment with Paypal</h5>
									<p className="mb-0 fs-6">You will be redirected to PayPal website to complete your purchase securely.</p>
								</div>
							</div>
						</Card.Body>
					</Card>

					{/* Credit / Debit Card Payment Method */}
					<Card className="card-bordered shadow-none mb-2">
						<Card.Body>
							<div className="d-flex mb-4">
								<Form.Check className="mb-2" >
									<Form.Check.Input type="radio" name="paymentMethod" id="card" />
									<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
								</Form.Check>
								<div>
									<h5 className="mb-1"> Credit / Debit Card</h5>
									<p className="mb-0 fs-6">Safe money transfer using your bank accou k account. We support
										Mastercard tercard, Visa, Discover and Stripe.</p>
								</div>
							</div>
							<Row>
								<Col xs={12}>
									<Form.Group className="mb-3" >
										<Form.Label htmlFor='cardNumber'>Card Number</Form.Label>
										<Form.Control
											{...registerWithMask("creditcard", ['9999-9999-9999-9999', '9999-9999-9999-9999'])}
											type="text"
											placeholder="____-____-____-____" />
									</Form.Group>
								</Col>
								<Col md={6} xs={12}>
									<Form.Group className="mb-3 mb-lg-0" >
										<Form.Label htmlFor='nameOnCard'>Name on card</Form.Label>
										<Form.Control type="text" placeholder="Enter your first name" id="nameOnCard" />
									</Form.Group>
								</Col>
								<Col md={3} xs={12}>
									<Form.Group className="mb-3" >
										<Form.Label htmlFor='expiryDate'>Expiry date</Form.Label>
										<Form.Control type='text'
											{...registerWithMask("expirydate", ['99/99', '99/99'])}
											placeholder="__/__" />
									</Form.Group>
								</Col>
								<Col md={3} xs={12}>
									<Form.Group className="mb-3 mb-lg-0" >
										<Form.Label htmlFor='cvvCode'>CVV Code
											<OverlayTrigger
												overlay={<Tooltip
													id="cvvTooltip">
													A 3 - digit number, typically printed on the back of a card.
												</Tooltip>}>
												<Link href="#"><i className="fe fe-help-circle ms-1"></i></Link>
											</OverlayTrigger>
										</Form.Label>
										<Form.Control type='password'
											{...registerWithMask("cvv", ['999', '999'])}
											placeholder="" />
									</Form.Group>
								</Col>
							</Row>
						</Card.Body>
					</Card>

					{/* Payoneer Payment Method */}
					<Card className="card-bordered shadow-none mb-2">
						<Card.Body>
							<div className="d-flex">
								<Form.Check className="mb-2">
									<Form.Check.Input type="radio" name="paymentMethod" id="payoneer" />
									<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
								</Form.Check>
								<div>
									<h5 className="mb-1"> Pay with Payoneer</h5>
									<p className="mb-0 fs-6">You will be redirected to Payoneer website to complete your
										purchase securely.</p>
								</div>
							</div>
						</Card.Body>
					</Card>

					{/* Cash On Delivery Payment Method */}
					<Card className="card-bordered shadow-none mb-2">
						<Card.Body>
							<div className="d-flex">
								<Form.Check className="mb-2">
									<Form.Check.Input type="radio" name="paymentMethod" id="cashonDelivery" />
									<Form.Check.Label className="ms-2 w-100" ></Form.Check.Label>
								</Form.Check>
								<div>
									<h5 className="mb-1"> Cash on Delivery</h5>
									<p className="mb-0 fs-6">Pay with cash when your order is delivered.</p>
								</div>
							</div>
						</Card.Body>
					</Card>

					{/* Button */}
					<div className="d-flex justify-content-between mt-3">
						<Button variant='outline-primary' className="mb-2 mb-md-0" onClick={previous}>
							Back to shipping
						</Button>
						<Button >
							Complete Order
						</Button>
					</div>
				</div>
			</div>
		</Form>
	);
};
export default PaymentSelection;
