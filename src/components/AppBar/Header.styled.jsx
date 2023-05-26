import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 20px;
  color: #fff;
  margin-bottom: 20px;

  h1 {
    margin: 0;
  }
`;

export const HeaderBox = styled.div`
  padding-right: 20px;
  position: relative;

  div {
    position: absolute;
    top: -15px;
    right: 0;
  }
`;
