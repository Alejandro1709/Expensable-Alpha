import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/SidebarNav';
import TransactionBar from '../components/TransactionBar/';
import Container from '../components/Container';
import CategoryPage from '../pages/CategoryPage';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  flex: 1;
`;

function LoggedInRoutes() {
  return (
    <Container>
      <Sidebar />
      <StyledMain>
        <Routes>
          <Route index path='/' element={<CategoryPage />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/categories/:type' element={<CategoryPage />} />
          <Route path='/transactions' element={<h1>Transactions</h1>} />
          <Route path='/budgets' element={<h1>Budgets</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </StyledMain>
      <TransactionBar />
    </Container>
  );
}

export default LoggedInRoutes;
