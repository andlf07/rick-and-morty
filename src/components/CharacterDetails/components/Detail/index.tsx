import React from 'react';
import { Details } from './styles';

interface Props {
  label: string;
  value: string | undefined;
}

const Detail: React.FC<Props> = ({ label, value }) => {
  if (!value) return null;

  return (
    <Details>
      <strong>{label}</strong>
      <span>{value}</span>
    </Details>
  );
};

export default Detail;
