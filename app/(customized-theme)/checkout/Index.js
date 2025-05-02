import React from "react";
import PageHeading from "shared/page-headings/PageHeading";
import LeftSideForm from "./components/LeftSideForm";
import RightSide from "./components/RightSide";

const Checkout = () => {
  return (
    <>
      <PageHeading pagetitle="Checkout" />

      <section className="container my-5">
        <div className="row">
          {/* Left: Form Section */}
          <LeftSideForm />

          {/* Right: Order Summary + Items */}
          <RightSide />
        </div>
      </section>
    </>
  );
};

export default Checkout;
