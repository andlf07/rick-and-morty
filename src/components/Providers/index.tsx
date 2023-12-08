'use client';
import DarkThemeContextProvider from '@/contexts/DarkThemeContext/DarkThemeContextProvider';
import FavoriteContextProvider from '@/contexts/FavoriteContext/FavoriteContextProvider';
import { GlobalStyle } from '@/styles/globals';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <DarkThemeContextProvider>
      <FavoriteContextProvider>
        {children}

        <GlobalStyle />
      </FavoriteContextProvider>
    </DarkThemeContextProvider>
  );
};

export default Providers;
