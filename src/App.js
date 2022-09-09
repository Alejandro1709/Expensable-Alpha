import { Routes, Route } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';
import Container from './components/Container';
import Sidebar from './components/SidebarNav';
import Wrapper from './components/Wrapper';

const initialCategories = [
  {
    name: 'Categories',
    to: '/categories/expenses',
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

const handleClickItem = () => {};

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar
          initialNavigation={initialCategories}
          onItemClick={handleClickItem}
        />
        <main className='main'>
          <Routes>
            <Route path='/' element={<h1>Categories</h1>} />
            <Route path='/categories' element={<h1>Categories</h1>} />
            <Route path='/categories/:type' element={<h1>Categories</h1>} />
            <Route path='/transactions' element={<h1>Transactions</h1>} />
            <Route path='/budgets' element={<h1>Budgets</h1>} />
          </Routes>
        </main>
      </Container>
    </Wrapper>
  );
}

export default App;
