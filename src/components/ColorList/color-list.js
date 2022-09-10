import React from 'react';
import Color from './color';
import styled from '@emotion/styled';

const StyledColors = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  gap: 20px;
`;

function ColorList({ colors }) {
  return (
    <div>
      <p>COLORS</p>
      <StyledColors className='wrapper__colors'>
        {colors.map((color) => (
          <Color key={color.name} color={color.color} />
        ))}
      </StyledColors>
    </div>
  );
}

export default ColorList;
