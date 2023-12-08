'use client';

import { useGetCharacters } from '@/hooks';
import { CharacterCard, FilterForm, Layout, Spinner } from '..';
import FilterChip from '../FilterChip';
import { BackButton, CharContainer, NextButton, PageCount, PaginationContainer } from './styles';

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
    control,
    getValues,
    isLoading,
  } = useGetCharacters();
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FilterForm
            errors={errors}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            control={control}
            getValues={getValues}
          />
          <FilterChip filters={filteredBy} handleClearFilter={handleClearFilter} />

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
        </>
      )}
    </Layout>
  );
};

export default Home;
