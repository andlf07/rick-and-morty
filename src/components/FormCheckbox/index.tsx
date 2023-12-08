/* eslint-disable no-unused-vars */
'use client';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface Props {
  name: string;
  control: Control<any, any>;
  label: string;
  options?: RegisterOptions;
  defaultValue?: any;
}

const FormCheckbox: React.FC<Props> = ({ name, control, label, options, defaultValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={options}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <input
            type="checkbox"
            onChange={() => onChange(label)}
            value={label}
            checked={value === label}
          />
          <span>{label}</span>
        </div>
      )}
    />
  );
};

export default FormCheckbox;
