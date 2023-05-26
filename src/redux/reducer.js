import { cartReducer } from "./cart/slice";
import { productsReducer } from "./products/slice";

//all reducers
const root = {
  products: productsReducer,
  cart: cartReducer,
};

export default root;
