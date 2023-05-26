import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { countAllCart } from 'utils/countProducts';

import { HeaderContainer, StyledLink, HeaderBox } from './Header.styled';

//header component
const Header = () => {
  const items = useSelector(state => state.cart.items);
  //count product in cart
  const countProducts = countAllCart(items);

  return (
    <>
      <HeaderContainer>
        {/* <h1>Online Store</h1> */}
        <HeaderBox>
          {/* <StyledLink to="/">Home</StyledLink> */}
          <StyledLink to="/products">Shop</StyledLink>
          <StyledLink to="/cart">Shopping Cart</StyledLink>
          <div>{countProducts}</div>
        </HeaderBox>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
