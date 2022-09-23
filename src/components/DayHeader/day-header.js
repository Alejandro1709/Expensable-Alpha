import React from 'react';
import { colors } from '../../styles/colors';
import styled from '@emotion/styled';

const StyledTransactionDay = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  padding: 12px 24px;
  background-color: #f9fafb;
`;

const StyledDay = styled.p`
  color: ${colors.gray[500]};
`;

const StyledCharge = styled.h3`
  color: ${colors.red[500]};
`;

function DayHeader() {
  return (
    <StyledTransactionDay>
      <h2>07</h2>
      <div className=''>
        <StyledDay>Monday</StyledDay>
        <p>March, 2022</p>
      </div>
      <StyledCharge>-$ 530</StyledCharge>
    </StyledTransactionDay>
  );
}

export default DayHeader;
