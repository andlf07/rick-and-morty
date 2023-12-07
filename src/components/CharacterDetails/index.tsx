'use client';

import { useFavorite, useGetCharacterDetails } from '@/hooks';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Layout } from '..';
import {
  AddFavoriteButton,
  CharacterContainer,
  Details,
  GoBack,
  HeaderContainer,
  Name,
} from './styles';

interface Props {}

const CharacterDetails: React.FC<Props> = () => {
  const { handleAddOrRemoveFavorite, checkIfItemAlreadyExists } = useFavorite();
  const params = useParams().id as string;
  const { character } = useGetCharacterDetails(params);

  return (
    <Layout>
      <CharacterContainer>
        <HeaderContainer>
          <GoBack href="/">
            <MdOutlineArrowBackIosNew /> Back
          </GoBack>

          {character && (
            <AddFavoriteButton
              onClick={event => {
                event.preventDefault();
                event.stopPropagation();
                handleAddOrRemoveFavorite(character);
              }}
            >
              {checkIfItemAlreadyExists(character.id) > -1 ? <AiFillStar /> : <AiOutlineStar />}
            </AddFavoriteButton>
          )}
        </HeaderContainer>
        {character && (
          <Image
            loader={() => character.image}
            src={character.image}
            unoptimized
            width={300}
            height={300}
            alt={character.name}
          />
        )}
        {character && <Name>{character.name}</Name>}

        {character && (
          <Details>
            <strong>Tipo</strong>
            <span>{character.type}</span>
          </Details>
        )}

        {character && (
          <Details>
            <strong>Origin</strong>
            <span>{character.origin.name}</span>
          </Details>
        )}

        {character && (
          <Details>
            <strong>Gender</strong>
            <span>{character.gender}</span>
          </Details>
        )}

        {character && (
          <Details>
            <strong>Status</strong>
            <span>{character.status}</span>
          </Details>
        )}

        {character && (
          <Details>
            <strong>Specie</strong>
            <span>{character.species}</span>
          </Details>
        )}
      </CharacterContainer>
    </Layout>
  );
};

export default CharacterDetails;
