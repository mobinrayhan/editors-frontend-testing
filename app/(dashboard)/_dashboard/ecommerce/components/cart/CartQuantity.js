// import node module libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';

const CartQuantity = ({
  quantity,
  handleChange,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <InputGroup size="sm">
      <Form.Control
        className="button-minus text-center flex-xl-none w-xl-30 w-xxl-10 px-0 py-1 "
        type="button"
        min="1"
        value="-"
        onClick={handleDecrease}
      />
      <Form.Control
        className="quantity-field text-center flex-xl-none w-xl-30 w-xxl-10 px-0 py-1"
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
      />
      <Form.Control
        className="button-plus text-center flex-xl-none w-xl-30 w-xxl-10 px-0 py-1 "
        type="button"
        value="+"
        onClick={handleIncrease}
      />
    </InputGroup>
  );
};

CartQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
};

export default CartQuantity;
