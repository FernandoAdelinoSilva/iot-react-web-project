import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, ...rest } : CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" {...rest} />
      {label}
    </label>
  );
};