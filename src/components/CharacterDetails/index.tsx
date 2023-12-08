'use client';

import { useFavorite, useGetCharacterDetails } from '@/hooks';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Layout, Spinner } from '..';
import { Detail } from './components';
import { AddFavoriteButton, CharacterContainer, GoBack, HeaderContainer, Name } from './styles';

interface Props {}

const CharacterDetails: React.FC<Props> = () => {
  const { handleAddOrRemoveFavorite, checkIfItemAlreadyExists } = useFavorite();
  const params = useParams().id as string;
  const { character, isLoading } = useGetCharacterDetails(params);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
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

          <Detail label="Tipo" value={character?.type} />
          <Detail label="Origin" value={character?.origin.name} />
          <Detail label="Gender" value={character?.gender} />
          <Detail label="Status" value={character?.status} />
          <Detail label="Specie" value={character?.type} />
          <Detail label="Tipo" value={character?.species} />
        </CharacterContainer>
      )}
    </Layout>
  );
};

export default CharacterDetails;
