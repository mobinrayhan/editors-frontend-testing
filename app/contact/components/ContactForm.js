"use client";
// import node module libraries
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

// import widget/custom components
import { FormSelect } from "widgets";

const ContactForm = () => {
  const contactReason = [
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
    { value: "Other", label: "Other" },
  ];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const handelContactFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="px-4 px-xl-20 py-8 py-lg-0">
      {/* form section */}
      <div id="form">
        <Form onSubmit={handleSubmit(handelContactFormSubmit)}>
          <Row>
            {/* First Name */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>
                  First Name:<span className="text-danger">*</span>
                </Form.Label>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="First Name"
                      isInvalid={!!errors.firstName}
                    />
                  )}
                />
                {errors.firstName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            {/* Last Name */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>
                  Last Name:<span className="text-danger">*</span>
                </Form.Label>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="text"
                      placeholder="Last Name"
                      isInvalid={!!errors.lastName}
                    />
                  )}
                />
                {errors.lastName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>
                  Email:<span className="text-danger">*</span>
                </Form.Label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="email"
                      placeholder="Email"
                      isInvalid={!!errors.email}
                    />
                  )}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>

            {/* Phone Number */}
            <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>
                  Phone Number:<span className="text-danger">*</span>
                </Form.Label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Please enter a valid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type="number"
                      placeholder="Phone"
                      isInvalid={!!errors.phone}
                    />
                  )}
                />
                {errors.phone && (
                  <Form.Control.Feedback type="invalid">
                    {errors.phone.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="formContactReason">
                <Form.Label>
                  Select course:<span className="text-danger">*</span>
                </Form.Label>
                <Controller
                  name="selectCourse"
                  control={control}
                  rules={{ required: "Contact reason is required" }}
                  render={({ field }) => (
                    <FormSelect
                      {...field}
                      placeholder="Select"
                      options={contactReason}
                      isInvalid={!!errors.contactReason}
                    />
                  )}
                />
                {errors.contactReason && (
                  <Form.Control.Feedback type="invalid">
                    {errors.contactReason.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            {/* Message */}
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      as="textarea"
                      placeholder="Message"
                      rows={3}
                    />
                  )}
                />
              </Form.Group>
            </Col>

            {/* Submit Button */}
            <Col md={12} sm={12}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        {/* <Form> */}
        {/* <Row> */}
        {/* First Name */}
        {/* <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>
                  First Name:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="First Name" required />
              </Form.Group>
            </Col> */}

        {/* Last Name */}
        {/* <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>
                  Last Name:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" required />
              </Form.Group>
            </Col> */}

        {/* Email */}
        {/* <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>
                  Email:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
            </Col> */}

        {/* Phone Number */}
        {/* <Col md={6} sm={12}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>
                  Phone Number:<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="number" placeholder="Phone" required />
              </Form.Group>
            </Col> */}

        {/* Contact Reason */}
        {/* <Col md={12} sm={12}>
							<Form.Group className="mb-3" controlId="formContactReason">
								<Form.Label>
									Contact Reason:<span className="text-danger">*</span>
								</Form.Label>
								<Form.Control
									as={FormSelect}
									placeholder="Select"
									options={contactReason}
									required
								/>
							</Form.Group>
						</Col> */}

        {/* Messages */}
        {/* <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="formMessages">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" placeholder="Messages" rows={3} />
              </Form.Group>
            </Col> */}

        {/* button */}
        {/* <Col md={12} sm={12}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form> */}
      </div>
    </div>
  );
};
export default ContactForm;
