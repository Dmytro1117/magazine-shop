import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #333333; /* змінюємо колір тексту */
  border: 2px solid #333333; /* змінюємо колір рамки */
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: auto;
  margin-top: 15px;
  margin-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #333333; /* змінюємо колір фону при наведенні */
    color: #ffffff; /* змінюємо колір тексту при наведенні */
  }
`;

export const BackIcon = styled(IoArrowBack)`
  margin-right: 10px;
`;

export const ProductDetailsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;
