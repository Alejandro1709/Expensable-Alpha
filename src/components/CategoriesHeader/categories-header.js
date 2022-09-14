import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { colors } from '../../styles';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  cursor: pointer;
  color: ${colors.pink[400]};
`;

const Minus = styled(AiOutlineMinusCircle)`
  font-size: 1.5rem;
`;

const Plus = styled(AiOutlinePlusCircle)`
  font-size: 1.5rem;
`;

function CategoriesHeader({ title, onPrev, onNext }) {
  return (
    <StyledNavigator className='category__navigator'>
      <h1>{title}</h1>
      <StyledActions className='category__navigator__actions'>
        <StyledAction onClick={onPrev}>
          <Minus />
          Expenses
        </StyledAction>
        <StyledAction onClick={onNext}>
          <Plus />
          Incomes
        </StyledAction>
      </StyledActions>
    </StyledNavigator>
  );
}

export default CategoriesHeader;

CategoriesHeader.propTypes = {
  title: PropTypes.string,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};

CategoriesHeader.defaultProps = {
  title: 'Categories',
};
