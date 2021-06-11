import React, {createContext} from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const theme = {};

  const setDarkTheme = () => {
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
