import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHeading from "shared/page-headings/PageHeading";

const CreditCardForm = () => {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePay = () => {
    alert("Payment processed for: " + cardDetails.name);
    // Here you'd typically send the data to a payment gateway
  };

  const handleCancel = () => {
    setCardDetails({ number: "", name: "", month: "", year: "", cvv: "" });
  };

  return (
    <>
      <div className="container mt-6" style={{ padding: 0, maxWidth: "100%" }}>
        <div className="card  border-0">
          {/*  */}
          <div className="bg-primary text-white p-3 rounded mb-4">
            <div className="fw-bold fs-6 mb-2">BANK</div>
            <div className="fs-5">
              {cardDetails.number || "1234 5678 9012 3456"}
            </div>
            <div className="d-flex justify-content-between mt-2">
              <small>{cardDetails.name || "CARDHOLDER NAME"}</small>
              <small>
                {cardDetails.month && cardDetails.year
                  ? `${cardDetails.month}/${cardDetails.year}`
                  : "MM/YY"}
              </small>
            </div>
          </div>

          <div className="mb-3 position-relative">
            <input
              type="text"
              className="form-control"
              name="number"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Cardholder Name"
              value={cardDetails.name}
              onChange={handleChange}
            />
          </div>

          <div className="row g-2 mb-3">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="month"
                placeholder="MM"
                value={cardDetails.month}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="year"
                placeholder="YY"
                value={cardDetails.year}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                name="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* <div className="d-flex gap-2">
          <button className="btn btn-primary w-100 fw-bold" onClick={handlePay}>
            PAY NOW
          </button>
          <button
            className="btn btn-outline-primary w-100 fw-bold"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
