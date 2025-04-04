// import node module libraries
import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

// import sub component
import CartQuantity from './CartQuantity';

// import data files
import ProductsData from 'data/dashboard/ecommerce/ProductsData';

// import actions from redux slice
import { removeItemFromCart, updateCart } from 'store/cartSlice';

// import utility file
import { convertToCurrency } from 'helper/utils';

const CartItem = ({ product }) => {
  const { id, quantity, totalPrice } = product;
  //const { CartState, CartDispatch } = useContext(CartContext);
  // const { cartItems, cartSummary, couponCodes } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const productInfo = ProductsData.filter((product) => product.id === id);

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrease = () => {
    dispatch(updateCart(
      {
        id: id,
        quantity: parseInt(quantity) + 1
      }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateCart(
        {
          id: id,
          quantity: parseInt(quantity) - 1
        }));
    }
  };

  const handleChange = e => {
    handleAddToCart(parseInt(e.target.value < 1 ? 1 : e.target.value));
  };

  return (
    <Fragment>
      <tr >
        <td>
          <div className="d-flex">
            <div>
              {/* <pre>{JSON.stringify(productInfo, null, 2)}</pre> */}
              <Image src={productInfo[0].images[0].image} alt="" className="img-4by3-md rounded" />
            </div>
            <div className="ms-4 mt-2 mt-lg-0">
              <h4 className="mb-1 text-primary-hover">
                {productInfo[0].name}
              </h4>
              <div>
                <span>Color: <span className="text-dark fw-medium">Orange</span></span> ,
                <span>Size: <span className="text-dark fw-medium"> 10</span></span>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-body">Edit</Link>
                <Link href="#" className="text-body ms-3">Move to Wishlist</Link>
                <Link href="#" className="text-body ms-3" onClick={() => handleRemove(id)}>Remove</Link>
              </div>
            </div>
          </div>
        </td>
        <td>
          <h4 className="mb-0">{convertToCurrency(product.price)}</h4>
        </td>
        <td>
          <CartQuantity quantity={product.quantity}
            handleChange={handleChange}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease} />
        </td>
        <td>
          <h4 className="mb-0">{convertToCurrency(totalPrice)}</h4>
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
