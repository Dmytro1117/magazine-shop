import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

export const ProductName = styled.h6`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductBrand = styled.h6`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const ProductType = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProductRating = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.h6`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;
