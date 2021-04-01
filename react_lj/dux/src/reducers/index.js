import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
	counter: CounterReducer,
	cart: CartReducer,
});

export default rootReducer;