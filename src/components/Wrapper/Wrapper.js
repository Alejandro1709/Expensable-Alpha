import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  height: 100vh;
  background-color: white;
`;

function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
