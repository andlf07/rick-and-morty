import { DarkThemeContext } from '@/contexts';
import React from 'react';

const useDarkTheme = () => {
  const { isDarkTheme, dispatchIsDarkTheme } = React.useContext(DarkThemeContext);

  const handleDarkTheme = () => dispatchIsDarkTheme(!isDarkTheme);

  return {
    isDarkTheme,
    handleDarkTheme,
  };
};

export default useDarkTheme;
