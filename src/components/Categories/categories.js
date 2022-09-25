import React, { useContext } from 'react';
import { colors, typography } from '../../styles';
import CategoriesContext from '../../context/categoriesContext';
import { getMonthlyData } from './utils';
import apiFetch from '../../services/api-fetch';
import CategoriesList from '../CategoriesList';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  user-select: none;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const TotalAmount = styled.p`
  ${typography.head.lg}
  color: ${colors.red[500]};
`;

const TotalLabel = styled.p`
  ${typography.text.sm}
  font-weight: 500;
  color: ${colors.gray[500]};
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
  cursor: pointer;
  color: ${colors.pink[400]};
`;

const Minus = styled(AiOutlineMinusCircle)`
  font-size: 1.5rem;
`;

const Plus = styled(AiOutlinePlusCircle)`
  font-size: 1.5rem;
`;
function Categories({ date, type }) {
  const {
    categories,
    setCategories,
    filteredCategories,
    setFilteredCategories,
    loading,
    error,
  } = useContext(CategoriesContext);

  const monthlyData = getMonthlyData(categories, date, type);

  const total = monthlyData.reduce((acc, cur) => acc + cur.amount, 0);

  function handleAddTransaction(categoryId, data) {
    const newCategories = [...categories];
    const category = newCategories.find((cat) => cat.id === categoryId);

    apiFetch(`categories/${category.id}/transactions`, {
      body: data,
    }).then((trx) => {
      category.transactions.push(trx);
      setCategories(newCategories);
    });
  }

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleShowExpenses = () => {
    const filteredCategories = categories.filter(
      (cat) => cat['transaction_type'] === 'expense'
    );
    setFilteredCategories(filteredCategories);
  };

  const handleShowIncomes = () => {
    const filteredCategories = categories.filter(
      (cat) => cat['transaction_type'] === 'income'
    );
    setFilteredCategories(filteredCategories);
  };

  return (
    <Wrapper>
      <StyledNavigator className='category__navigator'>
        <h1>Categories</h1>
        <StyledActions className='category__navigator__actions'>
          <StyledAction onClick={handleShowExpenses}>
            <Minus />
            Expenses
          </StyledAction>
          <StyledAction onClick={handleShowIncomes}>
            <Plus />
            Incomes
          </StyledAction>
        </StyledActions>
      </StyledNavigator>
      <TotalWrapper>
        <TotalAmount>$ {Intl.NumberFormat('en-US').format(total)}</TotalAmount>
        <TotalLabel>
          Total {type === 'expense' ? 'Expenses' : 'Income'}
        </TotalLabel>
      </TotalWrapper>
      <CategoriesList
        data={monthlyData}
        onAddTransaction={handleAddTransaction}
        onAddCatrgory={setCategories}
        categories={type === 'expense' ? categories : filteredCategories}
        date={date}
      />
    </Wrapper>
  );
}

export default Categories;

Categories.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
  }),
  type: PropTypes.oneOf(['income', 'expense']),
};
