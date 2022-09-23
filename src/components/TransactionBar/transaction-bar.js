import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import TransactionList from '../TransactionList/transaction-list';
import styled from '@emotion/styled';

const StyledTransactionBar = styled.div`
  width: 340px;
  border-left: 1px solid #eee;
  padding-top: 24px;
  padding-left: 33px;
  padding-right: 33px;
`;

const StyledTransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: #f3f4f6;
`;

function TransactionBar() {
  return (
    <StyledTransactionBar>
      <StyledTransactionHeader>
        <h2>Transactions</h2>
        <StyledCircle>
          <BiFilterAlt />
        </StyledCircle>
      </StyledTransactionHeader>
      {/* Filter Section */}
      FILTER
      {/* Transaction List */}
      <TransactionList />
    </StyledTransactionBar>
  );
}

export default TransactionBar;
