import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoriesProvider } from '../context/categoriesContext';
import Sidebar from '../components/SidebarNav';
import TransactionBar from '../components/TransactionBar/';
import Container from '../components/Container';
import CategoryPage from '../pages/CategoryPage';
import apiFetch from '../services/api-fetch';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  flex: 1;
`;

function LoggedInRoutes() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <Container>
      <CategoriesProvider
        value={{
          categories,
          setCategories,
          filteredCategories,
          setFilteredCategories,
          loading,
          error,
        }}
      >
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
      </CategoriesProvider>
    </Container>
  );
}

export default LoggedInRoutes;
