import { CartAction } from '../actions'

const { ADD_TO_CART, REMOVE_ITEM, REMOVE_ALL, ADJUST_ITEM_QTY } = CartAction;



const INITIAL_STATE = {
    cart: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                const existItem = state.cart.some(item => item.id === action.item.id);
                return {
                    ...state,
                    cart: existItem ? state.cart.map(item => item.id === action.item.id ? ({ ...item, qty: item.qty + 1 }) : item) :
                        state.cart.concat({ ...action.item, qty: 1 })

                };

            }
        case REMOVE_ITEM: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }

        }
        case REMOVE_ALL: {
            return {
                cart: []
            }
        }
        case ADJUST_ITEM_QTY:
            const { id, value } = action.data;
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === id
                        ? ({ ...item, qty: value })
                        : item
                ),
            };

        default: {
            return state;
        }

    }
};

export default CartReducer