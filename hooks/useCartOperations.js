// import node module libraries
import { useDispatch, useSelector } from 'react-redux';

// import required redux actions
import { updateCartSubTotal, updateCartTaxAmount } from 'store/cartSlice';

// import required helper file
import { convertToCurrency } from 'helper/utils';

const useCartOperations = () => {
	const { cartSummary } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// function to get cart subtotal
	const getCartSubtotal = (items) => {
		let subTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
		dispatch(updateCartSubTotal(subTotal));
		return subTotal;
	};

	// function to get discount amount
	const getDiscountAmount = (items) => {
		return convertToCurrency(
			getCartSubtotal(items) * (cartSummary.discount / 100)
		);
	};

	// function to get grand total of cart
	const getGrandTotal = () => {
		let grandTotal = cartSummary.subTotal - cartSummary.discount;
		dispatch(updateCartTaxAmount(grandTotal * (cartSummary.tax / 100)));
		grandTotal = grandTotal + cartSummary.taxAmount + cartSummary.shipping;
		return convertToCurrency(grandTotal);
	};

	return {
		getCartSubtotal,
		getDiscountAmount,
		convertToCurrency,
		getGrandTotal
	};
};

export default useCartOperations;
