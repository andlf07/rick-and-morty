import { API_ENDPOINT } from '@/consts/API_ENDPOINT';
import { Inputs } from '@/hooks/useGetCharacters';

export const filteredEndpoint = (data: Inputs) => {
  const filteredArray = [];

  let filteredQuery = `${API_ENDPOINT}/?page=1`;

  if (data.name) {
    filteredQuery = filteredQuery + `&name=${data.name}`;
    filteredArray.push(`Name: ${data.status}`);
  }

  if (data.status) {
    filteredQuery = filteredQuery + `&status=${data.status}`;
    filteredArray.push(`Status: ${data.status}`);
  }
  if (data.gender) {
    filteredQuery = filteredQuery + `&gender=${data.gender}`;
    filteredArray.push(`Gender: ${data.gender}`);
  }

  return { filteredArray, filteredQuery };
};
