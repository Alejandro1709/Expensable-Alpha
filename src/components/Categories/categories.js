import React, { useContext } from 'react';
import { colors, typography } from '../../styles';
import { getMonthlyData } from './utils';
import { handleAddTransaction } from '../../services/category-services';
import CategoriesContext from '../../context/categoriesContext';
import CategoriesHeader from '../CategoriesHeader/categories-header';
import CategoriesList from '../CategoriesList';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
function Categories({ date, type }) {
  const {
    categories,
    setCategories,
    loading,
    error,
    filteredCategories,
    setFilteredCategories,
    monthlyData,
  } = useContext(CategoriesContext);

  const total = monthlyData.reduce((acc, cur) => acc + cur.amount, 0);

  function onAddTransaction(categoryId, data) {
    const newCategories = [...categories];
    const category = newCategories.find((cat) => cat.id === categoryId);

    handleAddTransaction(categories, categoryId, data).then((trx) => {
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
      <CategoriesHeader
        title='Categories'
        onPrev={handleShowExpenses}
        onNext={handleShowIncomes}
      />
      <TotalWrapper>
        <TotalAmount>$ {Intl.NumberFormat('en-US').format(total)}</TotalAmount>
        <TotalLabel>
          Total {type === 'expense' ? 'Expenses' : 'Income'}
        </TotalLabel>
      </TotalWrapper>
      <CategoriesList
        data={monthlyData}
        onAddTransaction={onAddTransaction}
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
