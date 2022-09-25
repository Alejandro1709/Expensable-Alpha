import React, { useState, useEffect, useContext } from 'react';
import CategoriesContext from '../../context/categoriesContext';
import { parse } from 'date-fns';
import getMonth from 'date-fns/getMonth';
import DayHeader from '../DayHeader';
import styled from '@emotion/styled';

const StyledTransactionList = styled.div``;

function getMonthFromDate(dateStr) {
  const date = parse(dateStr, 'yyyy-MM-dd', new Date());
  const currentMonth = getMonth(date);
  const months = [
    'Janurary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[currentMonth + 1];
}

function buildResponse(categories) {
  let response = {};

  for (let i = 0; i < categories.length; i++) {
    const currentCategory = categories[i];

    for (let transaction of currentCategory.transactions) {
      const month = getMonthFromDate(transaction.date).toLowerCase();
      transaction.category = {
        name: currentCategory.name,
        icon: currentCategory.icon,
        color: currentCategory.icon,
      };
      // response[month] = {
      //   transactions: currentCategory.transactions.filter(
      //     (trx) =>
      //       getMonthFromDate(trx.date) === getMonthFromDate(transaction.date)
      //   ),
      // };
      response[month] = currentCategory.transactions.filter(
        (trx) =>
          getMonthFromDate(trx.date) === getMonthFromDate(transaction.date)
      );
    }
  }
  return response;
}

function TransactionList() {
  const { categories } = useContext(CategoriesContext);

  const months = [
    'Janurary',
    'February',
    'March',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let fixedDates = buildResponse(categories);

  useEffect(() => {
    localStorage.setItem('fixedDates', JSON.stringify(fixedDates));
  }, [fixedDates]);

  const currentTransactions =
    JSON.parse(localStorage.getItem('fixedDates')) || fixedDates;

  const currentMonth = months[getMonth(new Date()) + 1].toLowerCase();

  if (!currentTransactions) return <p>No</p>;

  return (
    <StyledTransactionList>
      {/* <DayHeader /> */}
      {currentTransactions.transactions &&
        currentTransactions.transactions.length > 0 &&
        currentTransactions['october'].map((trx) => <DayHeader />)}
    </StyledTransactionList>
  );
}

export default TransactionList;
