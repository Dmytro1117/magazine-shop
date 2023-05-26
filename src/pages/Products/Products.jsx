import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from 'redux/products/actions';
import {
  selectProductsList,
  selectProductsError,
  selectProductsLoading,
} from 'redux/products/selectors';

import ProductItem from 'components/ProductItem/ProductItem';
import { ProductGrid, StyledProductList } from './Products.styled';

function Products() {
  const dispatch = useDispatch();
  //selectors
  const productList = useSelector(selectProductsList);
  const errorMessage = useSelector(selectProductsError);
  const loading = useSelector(selectProductsLoading);

  //get product from API
  useEffect(() => {
    dispatch(
      getProductsList({ rating_greater_than: 4.99, price_greater_than: 10 })
    );
  }, [dispatch]);

  //loading message
  const loadingText = !productList.length ? (
    <h4>Loading...</h4>
  ) : (
    <h4>Updating List...</h4>
  );

  return (
    <StyledProductList>
      {loading && loadingText}
      {errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && (
        <ProductGrid>
          {productList.map(product => (
            <ProductItem {...product} key={product.id} />
          ))}
        </ProductGrid>
      )}
    </StyledProductList>
  );
}

export default Products;
