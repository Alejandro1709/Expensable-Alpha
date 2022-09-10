import React, { useState, useEffect } from 'react';
import { colors, typography } from '../../styles';
import { getMonthlyData } from './utils';
import apiFetch from '../../services/api-fetch';
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
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    setLoading(true);
    setError(null);
    apiFetch('categories')
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Wrapper>
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
        categories={categories}
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
