// import node module libraries
import { Fragment } from 'react';
import { Image } from 'react-bootstrap';

// import data files
import ProductsData from 'data/dashboard/ecommerce/ProductsData';

// import utility file
import { convertToCurrency } from 'helper/utils';

const CartItem = ({ product, index, totalItems }) => {
  const { id } = product;

  const productInfo = ProductsData.filter((product) => product.id === id);

  return (
    <Fragment>
      <div className="d-md-flex">
        <div>
          <Image src={productInfo[0].images[0].image} alt="" className="img-4by3-xl rounded" />
        </div>
        <div className="ms-md-4 mt-2">
          <h4 className="mb-1 text-primary-hover">
            {productInfo[0].name}
          </h4>
          <h5>{convertToCurrency(product.price)}</h5>
          <span>Qty:{product.quantity}</span>
        </div>
      </div>
      {index === totalItems - 1 ? '' : <hr className="my-3" />}
    </Fragment>
  );
};

export default CartItem;
