import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};

  &:hover {
    outline: 2px solid ${(props) => props.color};
  }
`;

function Color({ color }) {
  return <StyledButton color={color}></StyledButton>;
}

export default Color;
