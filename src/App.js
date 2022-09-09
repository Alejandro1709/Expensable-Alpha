import { Routes, Route } from 'react-router-dom';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Wrapper from './components/Wrapper';

const initialNavigation = [
  {
    id: 1,
    name: 'Categories',
    to: '/categories',
    icon: <BiCategoryAlt />,
    current: true,
  },
  {
    id: 2,
    name: 'Transactions',
    to: '/transactions',
    icon: <BsReceiptCutoff />,
  },
  {
    id: 3,
    name: 'Budgets',
    to: '/budgets',
    icon: <GiTargeted />,
  },
];

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar navigation={initialNavigation} />
        <main className='main'>
          <Routes>
            <Route path='/categories' element={<h2>Main</h2>} />
          </Routes>
        </main>
      </Container>
    </Wrapper>
  );
}

export default App;
