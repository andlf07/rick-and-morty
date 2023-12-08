/* eslint-disable no-unused-vars */
import { FormCheckbox } from '@/components';
import React from 'react';
import { Control } from 'react-hook-form';
import { AliveFilterContainer } from './styles';

interface Props {
  control: Control<any, any>;
  validate: any;
}

const AliveFilters: React.FC<Props> = ({ control, validate }) => {
  const status = ['Alive', 'Dead', 'unknown'];
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <span>Status:</span>
      <AliveFilterContainer>
        {status.map((statu, index: number) => {
          return (
            <FormCheckbox
              control={control}
              name={'status'}
              label={statu}
              options={{
                validate: (value: any) => {
                  return validate();
                },
              }}
              key={index}
            />
          );
        })}
      </AliveFilterContainer>
    </div>
  );
};

export default AliveFilters;
