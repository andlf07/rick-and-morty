import { Character } from '@/models/Character';
import { createContext, Dispatch, SetStateAction } from 'react';

interface InitialState {
  favoritesChar: Character[];
  dispatchFavoritesChar: Dispatch<SetStateAction<Character[]>>;
}

export const FavoriteInitialState: InitialState = {
  favoritesChar: [],
  dispatchFavoritesChar: () => {},
};

export const FavoriteContext = createContext<InitialState>(FavoriteInitialState);
