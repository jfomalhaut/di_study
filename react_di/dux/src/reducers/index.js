import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    cart: CartReducer,
});

export default rootReducer;