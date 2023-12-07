import React from 'react';
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
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContextProvider;
