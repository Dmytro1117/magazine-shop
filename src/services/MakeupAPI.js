import axios from 'axios';

const makeupApi = axios.create({
  baseURL: 'https://makeup-api.herokuapp.com/api/v1',
});

//get product request width params
const search = async (params = {}) => {
  const response = await makeupApi.get('products.json', { params });
  return response.data;
};

//get request by id
const getProduct = async (id = 0) => {
  const response = await makeupApi.get(`products/${id}.json`);
  return response.data;
};

const MakeupAPI = { search, getProduct };
export default MakeupAPI;
