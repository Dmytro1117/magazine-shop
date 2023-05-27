import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromCart } from '../../redux/cart/actions';
import CartItem from '../../components/CartItem/CartItem';
import { CartGrid, StyledCartList, Wraper } from './Cart.style';

//page Cart
const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const totalSum = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  //remove product from Cart
  const handleRemoveItem = itemId => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <StyledCartList>
        <Wraper>
          <h2>Your shopping Cart</h2>
          <h4>Total: {Number(totalSum.toFixed(1))}$</h4>
        </Wraper>
        {items.length === 0 ? (
          <p>Your shopping cart is empty</p>
        ) : (
          <>
            <ul>
              <CartGrid>
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemoveItem={handleRemoveItem}
                  />
                ))}
              </CartGrid>
            </ul>
          </>
        )}
      </StyledCartList>
    </div>
  );
};

export default Cart;
