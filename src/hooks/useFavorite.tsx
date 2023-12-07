import { FavoriteContext } from '@/contexts/FavoriteContext';
import { Character } from '@/models/Character';
import React from 'react';

const useFavorite = () => {
  const { favoritesChar, dispatchFavoritesChar } = React.useContext(FavoriteContext);

  const addToFavorite = (character: Character) => {
    const check = checkIfItemAlreadyExists(character.id);

    if (check < 0) {
      dispatchFavoritesChar(state => [...state, character]);
      localStorage.setItem('favoritesChar', JSON.stringify([...favoritesChar, character]));
    }
  };

  const removeFavoriteChar = (characterId: number) => {
    dispatchFavoritesChar(state => {
      const updateFavorites = state.filter(char => char.id !== characterId);
      localStorage.setItem('favoritesChar', JSON.stringify(updateFavorites));
      return updateFavorites;
    });
  };

  const checkIfItemAlreadyExists = (characterId: number): number => {
    return favoritesChar.findIndex(char => char.id === characterId);
  };

  const handleAddOrRemoveFavorite = (char: Character) => {
    if (checkIfItemAlreadyExists(char.id) > -1) {
      removeFavoriteChar(char.id);
    } else {
      addToFavorite(char);
    }
  };

  return {
    favoritesChar,
    addToFavorite,
    removeFavoriteChar,
    checkIfItemAlreadyExists,
    handleAddOrRemoveFavorite,
  };
};

export default useFavorite;
