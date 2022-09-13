import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Sidebar from './components/SidebarNav';
import Wrapper from './components/Wrapper';
import CategoryPage from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <StyledMain>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<CategoryPage />} />
            <Route path='/categories' element={<CategoryPage />} />
            <Route path='/categories/:type' element={<CategoryPage />} />
            <Route path='/transactions' element={<h1>Transactions</h1>} />
            <Route path='/budgets' element={<h1>Budgets</h1>} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </StyledMain>
      </Container>
    </Wrapper>
  );
}

export default App;
