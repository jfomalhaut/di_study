import { CartAction } from '../actions';
const { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL } = CartAction;

const initailState = {
	cart: []
};

const CartReducer = (state = initailState, action) => {
	switch(action.type) {
		case ADD_TO_CART: {
			const flag = state.cart.some(item => item.id === action.item.id);
			return {
				...state,
				cart: flag ? 
					state.cart.map(item => item.id === action.item.id ? ({ ...item, qty: item.qty + 1 }) : item) :
					state.cart.concat({ ...action.item, qty: 1 })
			};
		}
		case REMOVE_ITEM: {
			return state;
		}
		case REMOVE_ALL: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export default CartReducer;