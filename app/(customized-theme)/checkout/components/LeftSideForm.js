"use client";
import Image from "next/image";
import { useState } from "react";

export default function LeftSideForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
  };
  return (
    <div className="col-md-6 mb-4">
      <div className="card p-4 shadow-sm">
        <h4 className="fw-bold mb-4">Student Details</h4>
        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="01XXXXXXXXX"
            />
          </div>
        </form>

        <h5 className="mt-4 mb-3">Payment Options</h5>
        <div className="d-flex flex-wrap gap-3">
          {[
            {
              name: "SSL",
              img: "https://sslcommerz.com/wp-content/uploads/2021/11/logo.png",
            },
            {
              name: "Bkash",
              img: "https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg",
            },
            {
              name: "Upay",
              img: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/04/21/upay.jpg",
            },
            {
              name: "Nagad",
              img: "https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png",
            },
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
