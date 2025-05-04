"use client";
import Image from "next/image";
import React from "react";

export default function LeftSideForm() {
  const handlePaymentClick = (method) => {
    alert(`Selected payment method: ${method}`);
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
              img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iYTM2ZjdkYWE4ZGI0YWFlODdhNmU5MWVlZjU5ZmQ1ZD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.YvVB9XBip1snWZYFLOYTbUq0mrma7PJUmFsO7Xc68aI",
            },
            {
              name: "Bkash",
              img: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/08/84/62f92578037f0.png",
            },
            {
              name: "Upay",
              img: "https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/04/21/upay.jpg",
            },
            {
              name: "Nagad",
              img: "https://images.dwncdn.net/images/t_app-icon-l/p/f4b4a183-6c79-4b79-a2d2-8249707aee04/3154843298/2057_4-78566033-logo",
            },
          ].map((option) => (
            <img
              key={option.name}
              src={option.img}
              alt={option.name}
              className="img-thumbnail"
              role="button"
              // width={70}
              // height={45}
              style={{
                cursor: "pointer",
                objectFit: "cover",
                width: "70px",
                height: "45px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s",
              }}
              onClick={() => handlePaymentClick(option.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
