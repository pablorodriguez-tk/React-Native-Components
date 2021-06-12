import React, {createContext, useReducer} from 'react';
import {useEffect} from 'react';
import {Appearance, AppState} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './ThemeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  // const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  // solo IOS por ahora
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorScheme]);

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
