import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cart/actions';
import { succesNotify } from 'utils/notify';
//styles
import {
  ProductCard,
  ProductName,
  ProductImage,
  ProductRating,
  ProductInfo,
  ProductBrand,
  ProductType,
  ProductPrice,
  AddToCartButton,
  ProductDescription,
} from './ProductDetails.styled';

//component product details
export default function ProductDetailsItem({ product }) {
  const dispatch = useDispatch();
  const {
    name,
    price,
    image_link,
    id,
    product_type,
    rating,
    brand,
    description,
  } = product;

  return (
    <ProductCard>
      <ProductName>{name}</ProductName>
      <ProductImage src={image_link} alt="product" />

      <ProductInfo>
        <ProductBrand>{brand?.toUpperCase()}</ProductBrand>
        <ProductType>Product type: {product_type}</ProductType>
        <ProductRating>Product raiting: {rating || 0}</ProductRating>
        <ProductPrice>${price}</ProductPrice>
        <AddToCartButton
          onClick={() => {
            succesNotify();
            dispatch(
              addToCart({
                id,
                name,
                price,
                image_link,
              })
            );
          }}
        >
          Add to cart
        </AddToCartButton>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>
    </ProductCard>
  );
}
