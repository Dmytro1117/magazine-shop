import { addItem, removeItem, updateItemQuantity } from './slice';

//action add product to cart
export const addToCart = (product) => (dispatch) => {
  const { id, name, image_link, price, quantity } = product;
  dispatch(addItem({ id, name, image_link, price, quantity }));
};

//remove product from cart
export const removeFromCart = (itemId) => (dispatch) => {
  dispatch(removeItem(itemId));
};

//update cart
export const updateCartItemQuantity = (itemId, quantity) => (dispatch) => {
  dispatch(updateItemQuantity({ id: itemId, quantity }));
};