import styled from '@emotion/styled';
import React from 'react';

const StyledContainer = styled.div`
  display: flex;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
