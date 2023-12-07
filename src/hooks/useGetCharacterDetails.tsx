import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { Character } from '@/models/Character';
import axios from 'axios';
import React from 'react';

const useGetCharacterDetails = (id: string) => {
  const [character, setCharacter] = React.useState<Character | null>(null);

  const handleGetDetials = async () => {
    return axios
      .get<Character>(`${API_ENDPOINT}/${id}`)
      .then(({ data }) => {
        setCharacter(data);
      })
      .catch(() => {})
      .finally(() => {});
  };

  React.useEffect(() => {
    handleGetDetials();
  }, []);

  return {
    character,
  };
};

export default useGetCharacterDetails;
