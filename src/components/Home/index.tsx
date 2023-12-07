'use client';

import { useGetCharacters } from '@/hooks';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { CharacterCard, Layout } from '..';
import {
  BackButton,
  CharContainer,
  ClearButton,
  FilterForm,
  FilterSpan,
  FilteredContainer,
  NextButton,
  PageCount,
  PaginationContainer,
} from './styles';

const Home = () => {
  const {
    characters,
    handleSubmit,
    onSubmit,
    register,
    errors,
    filteredBy,
    handleClearFilter,
    currentPageNumber,
    handleNextPage,
    handlePrevPage,
    disableNextButton,
    disablePrevButton,
    currentInfo,
  } = useGetCharacters();
  return (
    <Layout>
      <FilterForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register('query', {
              required: {
                value: true,
                message: 'Porfavor ingresa un nombre',
              },
            })}
          />
          {errors.query && <span>{errors.query.message}</span>}
        </div>
        <button type="submit">
          <IoSearch />
        </button>
      </FilterForm>
      {!!filteredBy.length && (
        <FilteredContainer>
          <span>
            Filtered by:{' '}
            <FilterSpan>
              {filteredBy}{' '}
              <ClearButton type="button" onClick={handleClearFilter}>
                <IoCloseSharp />
              </ClearButton>
            </FilterSpan>
          </span>
        </FilteredContainer>
      )}

      <CharContainer>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharContainer>

      <PaginationContainer>
        <BackButton onClick={handlePrevPage} disabled={disablePrevButton}>
          Prev
        </BackButton>
        <PageCount type="text" disabled value={`${currentPageNumber} / ${currentInfo.pages}`} />
        <NextButton onClick={handleNextPage} disabled={disableNextButton}>
          Next
        </NextButton>
      </PaginationContainer>
    </Layout>
  );
};

export default Home;
