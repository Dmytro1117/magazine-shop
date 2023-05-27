import styled from 'styled-components';

export const StyledProductList = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10px;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;
