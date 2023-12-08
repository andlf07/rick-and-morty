/* eslint-disable no-unused-vars */
import { FormCheckbox } from '@/components';
import { Control } from 'react-hook-form';
import { GenderFilterContainer } from './styles';

interface Props {
  control: Control<any, any>;
  validate: any;
}

const GenderFilters: React.FC<Props> = ({ control, validate }) => {
  const genders = ['Female', 'Male', 'Genderless', 'unknown'];
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <span>Genders:</span>
      <GenderFilterContainer>
        {genders.map((gender, index: number) => {
          return (
            <FormCheckbox
              control={control}
              name={'gender'}
              label={gender}
              options={{
                validate: (value: any) => {
                  return validate();
                },
              }}
              key={index}
            />
          );
        })}
      </GenderFilterContainer>
    </div>
  );
};

export default GenderFilters;
