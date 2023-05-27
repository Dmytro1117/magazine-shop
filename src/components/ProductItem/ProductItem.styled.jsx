import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #1190de;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  background-color: #1690e149;

  &:hover {
    transform: scale(1.01); /* Збільшення елементу на 5% */
    background-color: #f2f2f2; /* Зміна кольору фону */
    cursor: pointer; /* Зміна вигляду курсора */
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid #2969c3;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductTitle = styled.h3`
  font-size: 24px;
  overflow: hidden;
  margin-bottom: 10px;
  text-align: center;
  max-height: 30px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #3f51b5;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 4px;
  padding:8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
