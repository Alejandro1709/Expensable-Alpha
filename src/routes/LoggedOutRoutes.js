import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Container from '../components/Container';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  flex: 1;
`;

function LoggedOutRoutes() {
  return (
    <Container>
      <StyledMain>
        <Routes>
          <Route index path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to='login' />} />
        </Routes>
      </StyledMain>
    </Container>
  );
}

export default LoggedOutRoutes;
