import React, { useState } from 'react';
import { colors, typography } from '../../styles';
import { getMonthlyData } from './utils';
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

  const handleAddTransaction = () => {};

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
