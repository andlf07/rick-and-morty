/* eslint-disable no-unused-vars */
'use client';
import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { AliveFilters, GenderFilters } from './components';
import { StyledFilterForm } from './styles';

interface Props {
  handleSubmit: (func: any) => {};
  errors: any;
  register: any;
  control: any;
  getValues: any;
}

const FilterForm: React.FC<Props> = ({ errors, handleSubmit, register, control, getValues }) => {
  const [showAliveFilters, setShowAliveFilters] = React.useState<boolean>(false);

  const handleShowAliveFilters = () => setShowAliveFilters(!showAliveFilters);

  const validateAtLeastOneField = (value: any) => {
    const values = getValues();
    const name = values.name !== '';
    const gender = !!values.gender;
    const status = !!values.status;

    return name || gender || status;
  };

  return (
    <div>
      <StyledFilterForm onSubmit={handleSubmit}>
        <div className="row-container">
          <div className="input-container">
            <input
              type="text"
              {...register('name', {
                // required: {
                //   value: true,
                //   message: 'Porfavor ingresa un nombre',
                // },
                validate: (value: any) => {
                  return validateAtLeastOneField(value);
                },
              })}
            />
            {errors.query && <span>{errors.query.message}</span>}
          </div>
          <button type="submit" className="input-button">
            <IoSearch />
          </button>
          <span className="input-button filters" onClick={handleShowAliveFilters}>
            Filters
          </span>
        </div>

        {showAliveFilters && <AliveFilters control={control} validate={validateAtLeastOneField} />}
        {showAliveFilters && <GenderFilters control={control} validate={validateAtLeastOneField} />}
      </StyledFilterForm>
    </div>
  );
};

export default FilterForm;
