import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { ApiData } from '@/models/ApiData';
import { Character } from '@/models/Character';
import { CurrentInfo } from '@/models/CurrentInfo';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
  query: string;
}

const useGetCharacters = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [data, setData] = React.useState<any>({
    results: [],
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
  });
  const [filteredBy, setFilteredBy] = React.useState<string>('');
  const [characters, setCharacters] = React.useState<Character[]>(data.results);
  const [currentInfo, setCurrentInfo] = React.useState<CurrentInfo>({
    ...data.info,
    current: API_ENDPOINT,
  });

  // Constants
  const { current } = currentInfo;
  const disablePrevButton = currentInfo.prev === null;
  const disableNextButton = currentInfo.next === null;
  const currentPageNumber = current.includes('page=')
    ? Number(new URL(current).searchParams.get('page'))
    : 1;

  // Functions
  const handleNextPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.next ? prevInfo.next : current };
    });
  };

  const handlePrevPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.prev ? prevInfo.prev : current };
    });
  };

  const handleClearFilter = () => {
    const resetPage = `${API_ENDPOINT}/?page=1`;

    setFilteredBy('');
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: resetPage };
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    const filteredQuery = `${API_ENDPOINT}/?page=1&name=${data.query}`;
    reset();
    setFilteredBy(data.query);
    setCurrentInfo({ ...currentInfo, current: filteredQuery });
  };

  const handleGetCharacters = async () => {
    return axios
      .get<ApiData>(API_ENDPOINT)
      .then(({ data }) => {
        setCurrentInfo({ ...currentInfo, ...data.info });
        setCharacters(data.results);
        setData(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  };

  React.useEffect(() => {
    handleGetCharacters();
  }, []);

  React.useEffect(() => {
    if (current === API_ENDPOINT) return;

    async function changePage() {
      const changePage = await axios
        .get<ApiData>(current)
        .then(({ data }) => {
          return data;
        })
        .catch(() => console.log('Personaje no encontrado'));

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
  };
};

export default useGetCharacters;
