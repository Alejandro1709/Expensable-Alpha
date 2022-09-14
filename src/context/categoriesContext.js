import { createContext } from 'react';

const CategoriesContext = createContext({});

export const CategoriesProvider = CategoriesContext.Provider;

export default CategoriesContext;
