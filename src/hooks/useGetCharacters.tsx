/* eslint-disable react-hooks/exhaustive-deps */
import { filteredEndpoint } from '@/adapters/filteredEndpoint';
import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { ApiData } from '@/models/ApiData';
import { Character } from '@/models/Character';
import { CurrentInfo } from '@/models/CurrentInfo';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCurrentInfo } from '.';

export interface Inputs {
  name: string;
  status: string;
  gender: string;
}

const useGetCharacters = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({});

  const [data, setData] = React.useState<any>({
    results: [],
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
  });
  const [filteredBy, setFilteredBy] = React.useState<string[]>([]);
  const [characters, setCharacters] = React.useState<Character[]>(data.results);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    currentInfo,
    currentPageNumber,
    disableNextButton,
    disablePrevButton,
    handleNextPage,
    handlePrevPage,
    setCurrentInfo,
  } = useCurrentInfo(data);

  const { current } = currentInfo;

  const handleClearFilter = () => {
    const resetPage = `${API_ENDPOINT}/?page=1`;

    setFilteredBy([]);
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: resetPage };
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    const { filteredArray, filteredQuery } = filteredEndpoint(data);

    reset();
    setFilteredBy(filteredArray);
    setCurrentInfo({ ...currentInfo, current: filteredQuery });
  };

  const handleGetCharacters = async () => {
    setIsLoading(true);
    return axios
      .get<ApiData>(API_ENDPOINT)
      .then(({ data }) => {
        setCurrentInfo({ ...currentInfo, ...data.info });
        setCharacters(data.results);
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    handleGetCharacters();
  }, []);

  React.useEffect(() => {
    if (current === API_ENDPOINT) return;

    async function changePage() {
      setIsLoading(true);
      const changePage = await axios
        .get<ApiData>(current)
        .then(({ data }) => {
          return data;
        })
        .catch(() => console.log('Personaje no encontrado'))
        .finally(() => {
          setIsLoading(false);
        });

      if (changePage) {
        setCurrentInfo({
          ...changePage.info,
          current,
        });

        setCharacters([...changePage.results]);
      }
    }

    changePage();
  }, [current]);

  return {
    onSubmit,
    handleClearFilter,
    handleNextPage,
    handleSubmit,
    handlePrevPage,
    filteredBy,
    disableNextButton,
    disablePrevButton,
    currentPageNumber,
    characters,
    register,
    errors,
    currentInfo,
    control,
    getValues,
    isLoading,
  };
};

export default useGetCharacters;
