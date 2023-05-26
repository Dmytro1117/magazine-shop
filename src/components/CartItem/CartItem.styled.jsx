import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-bottom: 10px;
  max-width: 200px;
  position: relative;

  div:first-child {
    font-weight: bold;
    margin-bottom: 10px;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }

  input[type='number'] {
    width: 50px;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  button {
    background-color: #fff;
    color: #f44336;
    border: 1px solid #f44336;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 10px;

    &:hover {
      background-color: #f44336;
      color: #fff;
    }
  }
`;

export const Price = styled.div`
  position: absolute;
  top: 5px;
  right: 5%;
  color: #f44336;
`;
