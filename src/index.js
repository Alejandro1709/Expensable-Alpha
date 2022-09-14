import React from 'react';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';
import { NavigationProvider } from './context/navigationContext';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/authContext';

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

const handleClickItem = () => {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <NavigationProvider
        value={{ categories: initialCategories, onClickItem: handleClickItem }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </NavigationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
