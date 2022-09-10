import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { colors } from '../../styles';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  color: ${colors.gray[400]};
  border: 2px dashed ${colors.gray[400]};
  cursor: pointer;
`;

function CreateCategory() {
  return (
    <StyledButton>
      <AiOutlinePlus size={24} />
    </StyledButton>
  );
}

export default CreateCategory;
