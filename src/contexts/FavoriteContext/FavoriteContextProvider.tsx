import { Character } from '@/models/Character';
import React from 'react';
import { FavoriteContext, FavoriteInitialState } from '.';

const FavoriteContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoritesChar, setFavoriteChar] = React.useState<Character[]>(
    FavoriteInitialState.favoritesChar
  );

  return (
    <FavoriteContext.Provider
      value={{
        favoritesChar,
        dispatchFavoritesChar: setFavoriteChar,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
