import { createContext, Dispatch, SetStateAction } from 'react';

interface InitialState {
  isDarkTheme: boolean;
  dispatchIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const DarkThemeInitialState: InitialState = {
  isDarkTheme: true,
  dispatchIsDarkTheme: () => {},
};

export const DarkThemeContext = createContext<InitialState>(DarkThemeInitialState);
