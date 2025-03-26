// import node module libraries
import { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Link from 'next/link';
import { useSelector } from 'react-redux';

// import required hooks
import useCartOperations from 'hooks/useCartOperations';

// import required sub-component
import CartItem from './CartItem';

// import required helper file
import { convertToCurrency } from 'helper/utils';

const OrderSummary = () => {
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const { cartItems, cartSummary } = useSelector((state) => state.cart);

  const { getCartSubtotal } = useCartOperations();

  useEffect(() => {
    setCartSubTotal(getCartSubtotal(cartItems));
  }, [cartItems, cartSubTotal, getCartSubtotal]);


  // Calculate discount
  const discount = cartSummary.discount === 0 ? 0 : (parseFloat(cartSubTotal) * (parseFloat(cartSummary.discount) / 100))
  const discountedTotal = cartSubTotal - discount;

  // Calculate tax
  const tax = discountedTotal * (cartSummary.tax / 100);
  const totalWithTax = discountedTotal + cartSummary.shipping + tax;

  return (
    <Card className="mt-4 mt-lg-0">
      <Card.Body>
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-1">Order Summary</h4>
          <Link href="/dashboard/ecommerce/shopping-cart">Edit Cart</Link>
        </div>
        {cartItems.map((product, index) => {
          return (
            <CartItem key={index} product={product} index={index} totalItems={cartItems.length} />
          )
        })}
      </Card.Body>
      <Card.Body className="border-top pt-2">
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
            <span>Sub Total :</span>
            <span className='text-dark fw-semibold'>
              {convertToCurrency(cartSubTotal)}
            </span>
          </ListGroup.Item>
          {cartSummary.coupon && <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
            <span>Discount <span className="text-muted">({cartSummary.coupon})</span>: </span>
            <span className='text-dark fw-semibold'>-{convertToCurrency(cartSummary.discount)}</span>
          </ListGroup.Item>}
          <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
            <span>Shipping Charge :</span>
            <span className='text-dark fw-semibold'>{convertToCurrency(cartSummary.shipping)}</span>
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
            <span>Tax Vat {cartSummary.tax.toFixed(2)}% (included) :</span>
            <span className='text-dark fw-semibold'> {convertToCurrency(tax)} </span>
          </ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-between px-0 pb-0'>
            <span className='fs-4 fw-semibold text-dark'>Grand Total :</span>
            <span className='fw-semibold text-dark'>
              {convertToCurrency(totalWithTax)}
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default OrderSummary