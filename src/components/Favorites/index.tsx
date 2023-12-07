'use client';
import { useFavorite } from '@/hooks';
import Image from 'next/image';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Layout } from '..';
import {
  Empty,
  FavoritesChar,
  FavoritesCharDetails,
  FavoritesContent,
  GoBack,
  HeaderContainer,
} from './styles';

interface Props {}

const Favorites: React.FC<Props> = () => {
  const { favoritesChar, removeFavoriteChar } = useFavorite();

  const favoritesQuantity = favoritesChar.length;

  return (
    <Layout>
      <FavoritesContent>
        <HeaderContainer>
          <GoBack href="/">
            <MdOutlineArrowBackIosNew /> Back
          </GoBack>
          <h2>Tus favoritos</h2>
        </HeaderContainer>

        <section>
          {favoritesQuantity <= 0 ? (
            <Empty>
              <p>Tu lista de favoritos esta vacio!.</p>
            </Empty>
          ) : (
            <>
              {favoritesChar.map(char => (
                <FavoritesChar href={`/character/${char.id}`} key={char.id}>
                  <Image
                    width={89}
                    height={89}
                    loader={() => char.image}
                    src={char.image}
                    alt={char.name}
                  />
                  <FavoritesCharDetails>
                    <p>{char.name}</p>
                    <button
                      onClick={event => {
                        event.preventDefault();
                        event.stopPropagation();
                        removeFavoriteChar(char.id);
                      }}
                    >
                      Remover
                    </button>
                  </FavoritesCharDetails>
                </FavoritesChar>
              ))}
            </>
          )}
        </section>
      </FavoritesContent>
    </Layout>
  );
};

export default Favorites;
