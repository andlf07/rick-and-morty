'use client';
import { useFavorite } from '@/hooks';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FavoritesListButton } from './styles';

interface Props {}

const FavoriteButton: React.FC<Props> = () => {
  const { favoritesChar } = useFavorite();

  const totalCharsInTheFavorites = favoritesChar.length;

  return (
    <FavoritesListButton href="/favorites">
      <AiFillStar />
      {totalCharsInTheFavorites > 0 && <span>{totalCharsInTheFavorites}</span>}
    </FavoritesListButton>
  );
};

export default FavoriteButton;
