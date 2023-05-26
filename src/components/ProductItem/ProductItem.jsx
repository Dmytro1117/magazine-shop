import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cart/actions';
import { succesNotify } from 'utils/notify';
import {
  ProductCard,
  ImageWrapper,
  Image,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  Button,
  ButtonWrapper,
} from './ProductItem.styled';

//component product item
export default function ProductItem({ id, name, price, image_link }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //add product to cart and message toast
  const handleClick = () => {
    succesNotify();

    dispatch(
      addToCart({
        id,
        name,
        price,
        image_link,
      })
    );
  };

  return (
    <ProductCard key={id}>
      <ImageWrapper>
        <Image src={image_link} alt={name} />
      </ImageWrapper>
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price} USD</ProductPrice>
        <ButtonWrapper>
          <Button
            onClick={() => navigate(`/products/${id}`, { replace: true })}
          >
            Details
          </Button>
          <Button onClick={handleClick}>Add to Cart</Button>
        </ButtonWrapper>
      </ProductInfo>
    </ProductCard>
  );
}
