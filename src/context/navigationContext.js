import { createContext } from 'react';

const NavigationContext = createContext({});

export const NavigationProvider = NavigationContext.Provider;

export default NavigationContext;
