import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { format, getMonth, getYear } from 'date-fns';
import MonthPicker from '../components/MonthPicker';
import { MonthPickerProvider } from '../context/monthPickerContext';
import { CategoriesProvider } from '../context/categoriesContext';
import styled from '@emotion/styled';
import Categories from '../components/Categories/categories';
import { handleGetCategories } from '../services/category-services';
import { getMonthlyData } from '../components/Categories/utils';

const StyledCategory = styled.div`
  margin: 24px 32px;
  /* background-color: aqua; */

  @media screen and (max-width: 568px) {
    /* background-color: aqua; */
    margin: 1rem;
  }
`;

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const monthlyData = getMonthlyData(categories, date, type);

  useEffect(() => {
    setLoading(true);
    setError(null);
    handleGetCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <StyledCategory className='category'>
      <MonthPickerProvider
        value={{
          label: format(new Date(date.year, date.month), 'MMMM yyyy'),
          onLeftClick: handleLeftClick,
          onRightClick: handleRightClick,
        }}
      >
        <CategoriesProvider
          value={{
            categories,
            setCategories: setCategories,
            filteredCategories,
            setFilteredCategories: setFilteredCategories,
            loading: loading,
            error: error,
            monthlyData,
          }}
        >
          <MonthPicker />
          <Categories {...{ date, type }} />
        </CategoriesProvider>
      </MonthPickerProvider>
    </StyledCategory>
  );
}

export default CategoryPage;
