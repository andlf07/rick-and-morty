'use client';
import React from 'react';
import { SpinnerContainer } from './styles';

interface Props {}

const Spinner: React.FC<Props> = () => {
  return (
    <SpinnerContainer>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;
