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
