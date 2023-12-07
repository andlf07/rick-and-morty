'use client';
import DarkThemeContextProvider from '@/contexts/DarkThemeContext/DarkThemeContextProvider';
import FavoriteContextProvider from '@/contexts/FavoriteContext/FavoriteContextProvider';
import { useDarkTheme } from '@/hooks';
import { GlobalStyle } from '@/styles/globals';
import { defaultTheme, lightTheme } from '@/styles/themes/default';
import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const { isDarkTheme } = useDarkTheme();

  // console.log(isDarkTheme);

  React.useEffect(() => {}, [isDarkTheme]);

  return (
    <DarkThemeContextProvider>
      <FavoriteContextProvider>
        <ThemeProvider theme={isDarkTheme ? defaultTheme : lightTheme}>
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </FavoriteContextProvider>
    </DarkThemeContextProvider>
  );
};

export default Providers;
