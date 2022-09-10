import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { format, getMonth, getYear } from 'date-fns';
import { colors } from '../styles';
import MonthPicker from '../components/MonthPicker';
import styled from '@emotion/styled';
import Categories from '../components/Categories/categories';

const StyledCategory = styled.div`
  margin: 24px 32px;
  /* background-color: aqua; */

  @media screen and (max-width: 568px) {
    /* background-color: aqua; */
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
  let params = useParams();

  const [searchParams, setSearchParams] = useSearchParams({
    year: getYear(new Date()),
    month: getMonth(new Date()),
  });

  const type = params.type || 'expense';

  const date = {
    year: Number(searchParams.get('year')),
    month: Number(searchParams.get('month')),
  };

  const handleRightClick = () => {
    const month = date.month + 1 > 11 ? 0 : date.month + 1;
    const year = month === 0 ? date.year + 1 : date.year;

    setSearchParams({ year, month });
  };

  const handleLeftClick = () => {
    const month = date.month - 1 < 0 ? 11 : date.month - 1;
    const year = month === 11 ? date.year - 1 : date.year;

    setSearchParams({ year, month });
  };

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
      <MonthPicker
        label={format(new Date(date.year, date.month), 'MMMM yyyy')}
        onRightClick={handleRightClick}
        onLeftClick={handleLeftClick}
      />
      <Categories {...{ date, type }} />
    </StyledCategory>
  );
}

export default CategoryPage;
