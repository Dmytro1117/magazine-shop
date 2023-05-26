import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity } from 'redux/cart/actions';

import { ListItem, Price } from './CartItem.styled';

//product item in cart
const CartItem = ({ item, onRemoveItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  //update cart item quantity
  const handleQuantityChange = event => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    dispatch(updateCartItemQuantity(item.id, newQuantity));
  };

  return (
    <ListItem>
      <div>{item.name}</div>
      <img src={item.image_link} alt={item.name} />
      <Price>{item.price} $</Price>
      <div>
        <input
          type="number"
          min="1"
          value={quantity || 1}
          onChange={handleQuantityChange}
        />
      </div>
      <div>Total: {Number(item.sum.toFixed(1))} $</div>
      <div>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    </ListItem>
  );
};

export default CartItem;
