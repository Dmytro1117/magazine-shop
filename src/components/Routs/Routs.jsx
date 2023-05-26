import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Products from 'pages/Products/Products';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import Cart from 'pages/Cart/Cart';

import Home from 'components/Home/Home';
import Header from 'components/AppBar/Header';

//component Rours
export default function Routs() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h3>Not Found</h3>} />
      </Route>
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
}
