import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { colors } from '../styles';
import styled from '@emotion/styled';

const StyledCategory = styled.div`
  margin: 24px 32px;
  background-color: aqua;
  @media screen and (max-width: 568px) {
    background-color: aqua;
    margin: 1rem;
  }
`;

const StyledNavigator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: white;
`;

const StyledActions = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1rem;
`;

const StyledAction = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.pink[400]};
`;

const Minus = styled(AiOutlineMinusCircle)`
  font-size: 1.5rem;
`;

const Plus = styled(AiOutlinePlusCircle)`
  font-size: 1.5rem;
`;

function CategoryPage() {
  return (
    <StyledCategory className='category'>
      <StyledNavigator className='category__navigator'>
        <h1>Categories</h1>
        <StyledActions className='category__navigator__actions'>
          <StyledAction>
            <Minus />
            Expenses
          </StyledAction>
          <StyledAction>
            <Plus />
            Incomes
          </StyledAction>
        </StyledActions>
      </StyledNavigator>
      djf
    </StyledCategory>
  );
}

export default CategoryPage;
