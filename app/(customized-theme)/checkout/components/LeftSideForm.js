"use client";
import Image from "next/image";
import { useState } from "react";

export default function LeftSideForm({ register, errors }) {
  const [paymentMethod, setPaymentMethod] = useState("ssl_commerz");
  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="col-md-6 mb-4">
      <div className="card p-4 shadow-sm">
        <h4 className="fw-bold mb-4">Student Details</h4>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            placeholder="Your name"
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName.message}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="01XXXXXXXXX"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "Phone number must be 11 digits starting with 01",
              },
            })}
          />
          {errors.phone && (
            <div className="invalid-feedback">{errors.phone.message}</div>
          )}
        </div>

        <input
          type="hidden"
          value={paymentMethod}
          {...register("paymentMethod", {
            pattern: {
              value: paymentMethod,
              // message: "Phone number must be 11 digits starting with 01",
            },
          })}
        />

        <h5 className="mt-4 mb-3">Payment Options</h5>
        <div className="d-flex flex-wrap gap-3 mb-4">
          {[
            {
              name: "ssl_commerz",
              img: "https://sslcommerz.com/wp-content/uploads/2021/11/logo.png",
            },
            // Add more methods here if needed
          ].map((option) => (
            <Image
              key={option.name}
              src={option.img}
              alt={option.name}
              width={70}
              height={45}
              className="img-thumbnail"
              role="button"
              style={{
                cursor: "pointer",
                backgroundColor:
                  paymentMethod === option.name ? "#754FFE" : "transparent",
              }}
              onClick={() => handlePaymentClick(option.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
