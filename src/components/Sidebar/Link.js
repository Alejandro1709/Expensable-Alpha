import React from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/colors';
import styled from '@emotion/styled';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* background-color: ${colors.pink[400]}; */
  padding: 8px 12px;
  color: black;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: ${colors.pink[100]};
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 6px;
  color: black;
  width: 100%;
`;

function Link({ nav }) {
  return (
    <StyledLink
      to={nav.to}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? colors.pink[400] : '',
          color: isActive ? colors.white : '',
        };
      }}
    >
      <StyledItem>
        {nav.icon}
        <span>{nav.name}</span>
      </StyledItem>
    </StyledLink>
  );
}

export default Link;
