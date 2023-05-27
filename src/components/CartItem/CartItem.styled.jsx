import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  border: 1px solid #0a9ae8;
  border-radius: 5px;
  /* margin-bottom: 10px; */
  max-width: 300px;
  position: relative;

  div:first-child {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    width: 250px;
    max-height: 20px;
    overflow: hidden;
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
    color: #0a9ae8;
    border: 1px solid #0a9ae8;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 10px;

    &:hover {
      background-color: #0a9ae8;
      color: #fff;
    }
  }
`;

export const Price = styled.div`
  position: absolute;
  top: 5px;
  right: 5%;
  color: #0a9ae8;
`;
