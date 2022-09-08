import styled from '@emotion/styled';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 840px) {
    flex-direction: row;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
