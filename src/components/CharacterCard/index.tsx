'use client';
import { useFavorite } from '@/hooks';
import { Character } from '@/models/Character';
import Image from 'next/image';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { AddFavoriteButton, CharContent } from './styles';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const { checkIfItemAlreadyExists, handleAddOrRemoveFavorite } = useFavorite();

  return (
    <CharContent href={`/character/${character.id}`} key={character.id} prefetch={false}>
      <Image
        loader={() => character.image}
        src={character.image}
        unoptimized
        width={300}
        height={300}
        alt={character.name}
      />
      <span>{character.name}</span>
      <div>
        <AddFavoriteButton
          onClick={event => {
            event.preventDefault();
            event.stopPropagation();
            handleAddOrRemoveFavorite(character);
          }}
        >
          {checkIfItemAlreadyExists(character.id) > -1 ? <AiFillStar /> : <AiOutlineStar />}
        </AddFavoriteButton>
      </div>
    </CharContent>
  );
};

export default CharacterCard;
