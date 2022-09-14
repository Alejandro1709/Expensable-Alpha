import { Routes, Route } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';
import Container from './components/Container';
import Sidebar from './components/SidebarNav';
import Wrapper from './components/Wrapper';
import CategoryPage from './pages/CategoryPage';
import styled from '@emotion/styled';

const initialCategories = [
  {
    name: 'Categories',
    to: '/categories',
    icon: <BiCategory />,
  },
  {
    name: 'Transactions',
    to: '/transactions',
    icon: <BsReceiptCutoff />,
  },
  {
    name: 'Budgets',
    to: '/budgets',
    icon: <GiTargeted />,
  },
];

const StyledMain = styled.main`
  flex: 1;
`;

const handleClickItem = () => {};

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar
          initialNavigation={initialCategories}
          onItemClick={handleClickItem}
        />
        <StyledMain>
          <Routes>
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
