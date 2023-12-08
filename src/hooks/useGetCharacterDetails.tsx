/* eslint-disable react-hooks/exhaustive-deps */
import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { Character } from '@/models/Character';
import axios from 'axios';
import React from 'react';

const useGetCharacterDetails = (id: string) => {
  const [character, setCharacter] = React.useState<Character | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleGetDetials = async () => {
    setIsLoading(true);

    return axios
      .get<Character>(`${API_ENDPOINT}/${id}`)
      .then(({ data }) => {
        setCharacter(data);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    handleGetDetials();
  }, []);

  return {
    character,
    isLoading,
  };
};

export default useGetCharacterDetails;
