//import node module libraries
import { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

// import required hooks
import useCartOperations from "hooks/useCartOperations";
import { useDispatch, useSelector } from "react-redux";

// import required redux actions
import { convertToCurrency } from "helper/utils";
import { applyCoupon, updateCartTaxAmount } from "store/cartSlice";

const OrderSummary = () => {
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeFound, setCouponCodeFound] = useState(null);

  const { cartItems, cartSummary, couponCodes } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const { getCartSubtotal } = useCartOperations();

  useEffect(() => {
    setCartSubTotal(getCartSubtotal(cartItems));
    dispatch(updateCartTaxAmount(cartSubTotal * (cartSummary.tax / 100)));
  }, [cartItems, cartSubTotal, getCartSubtotal, dispatch, cartSummary.tax]);

  const applyCouponCode = () => {
    const couponInfo = couponCodes.find((coupon) => coupon.code === couponCode);

    if (couponInfo) {
      setCouponCodeFound(true);
      dispatch(
        applyCoupon({
          coupon: couponInfo.code,
          discount: couponInfo.discount,
        })
      );
    } else {
      setCouponCodeFound(false);
      dispatch(
        applyCoupon({
          coupon: couponCode,
          discount: 0,
        })
      );
    }
    setCouponCode("");
  };

  // Calculate discount
  const discount =
    cartSummary.discount === 0
      ? 0
      : parseFloat(cartSubTotal) * (parseFloat(cartSummary.discount) / 100);
  const discountedTotal = cartSubTotal - discount;

  // Calculate tax
  const tax = discountedTotal * (cartSummary.tax / 100);
  const totalWithTax = discountedTotal + tax;

  return (
    <Fragment>
      <Card className="mb-4 mt-4 mt-lg-0">
        <Card.Body>
          <h4 className="mb-3">Have a promo code ?</h4>
          <Row className="g-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button
                type="submit"
                variant="dark"
                onClick={(e) => {
                  e.preventDefault();
                  applyCouponCode();
                }}
              >
                {" "}
                Apply
              </Button>
            </Col>
          </Row>
          <div className="mt-2">
            {couponCodeFound === null ? (
              ""
            ) : couponCodeFound ? (
              <Alert variant="success">
                <strong>{cartSummary.coupon}</strong> Coupon code is applied
                successfully!!.
              </Alert>
            ) : (
              <Alert variant="danger">
                Either <strong>{cartSummary.coupon}</strong> coupon code is
                invalid or expired.
              </Alert>
            )}
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <h4 className="mb-3">Order Summary</h4>
          <ListGroup variant="flush">
            <ListGroup.Item className="px-0 d-flex justify-content-between fs-5 text-dark fw-medium">
              <span>Sub Total :</span>
              <span>{convertToCurrency(cartSubTotal)}</span>
            </ListGroup.Item>
            {cartSummary.discount === 0
              ? ""
              : cartSummary.coupon && (
                  <ListGroup.Item className="px-0 d-flex justify-content-between fs-5 text-dark fw-medium">
                    <span>
                      Discount{" "}
                      <span className="text-muted">({cartSummary.coupon})</span>
                      :{" "}
                    </span>
                    <span>-{convertToCurrency(discount)}</span>
                  </ListGroup.Item>
                )}
            <ListGroup.Item className="px-0 d-flex justify-content-between fs-5 text-dark fw-medium">
              <span>Shipping Charge :</span>
              <span>
                {cartSummary.shipping === 0
                  ? "Free"
                  : convertToCurrency(cartSummary.shipping)}
              </span>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 d-flex justify-content-between fs-5 text-dark fw-medium">
              <span>Tax Vat {cartSummary.tax.toFixed(2)}% (included) :</span>
              <span>{convertToCurrency(tax)}</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <div className=" px-0 d-flex justify-content-between fs-5 text-dark fw-semibold">
            <span>Total (USD)</span>
            <span>{convertToCurrency(totalWithTax)}</span>
          </div>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default OrderSummary;
