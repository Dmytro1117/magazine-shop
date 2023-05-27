import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 100px;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    
  }
  &.active {
    /* text-decoration: underline; */
    color: #14a2e9;
     }
`;

export const HeaderContainer = styled.header`
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  background-color: #205182;
  padding: 16px;
  color: #fff;
  margin-bottom: 40px;

  h1 {
    margin: 0;
  }
`;

export const HeaderBox = styled.div`
  padding-right: 20px;
  position: relative;

  div {
    position: absolute;
    top: -5px;
    right: 0;
  }
`;
