import { defaultTheme, lightTheme } from '@/styles/themes/default';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkThemeContext, DarkThemeInitialState } from '.';

const DarkThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(DarkThemeInitialState.isDarkTheme);

  return (
    <DarkThemeContext.Provider
      value={{
        isDarkTheme,
        dispatchIsDarkTheme: setIsDarkTheme,
      }}
    >
      <ThemeProvider theme={isDarkTheme ? defaultTheme : lightTheme}>{children}</ThemeProvider>
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContextProvider;
