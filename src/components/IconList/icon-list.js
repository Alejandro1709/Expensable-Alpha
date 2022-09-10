import React from 'react';
import CircleIcon from '../CircleIcon';
import styled from '@emotion/styled';
import { colors } from '../../styles';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

function IconList({ icons }) {
  return (
    <StyledWrapper>
      ICONS
      <StyleList>
        {icons.map((icon) => (
          <CircleIcon
            key={icon.name}
            Icon={icon.Icon}
            size='md'
            color={colors.gray[600]}
          />
        ))}
      </StyleList>
    </StyledWrapper>
  );
}

export default IconList;
