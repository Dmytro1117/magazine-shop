import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MakeupAPI from 'services/MakeupAPI';

import ProductDetailsItem from 'components/ProductDetails/ProductDetailsItem';
import {
  BackButton,
  ProductDetailsContainer,
  Container,
  BackIcon,
} from './ProductDetail.styled';

//page product details
const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  //get product by id
  useEffect(() => {
    MakeupAPI.getProduct(params.id).then(productDetails =>
      setProduct(productDetails)
    );
  }, [params]);

  return (
    <Container>
      <BackButton onClick={() => navigate(location.state?.from || '/products')}>
        <BackIcon />
        Back to products
      </BackButton>
      <ProductDetailsContainer>
        <ProductDetailsItem product={product} />
      </ProductDetailsContainer>
    </Container>
  );
};

export default ProductDetails;
