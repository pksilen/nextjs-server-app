import { TextField } from '@mui/material';
import React from 'react';

export type TextInputProps = Readonly<{
  autoFocus?: boolean;
  className?: string;
  error?: string | null | undefined;
  inputProps?: object;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string;
  variant?: 'outlined' | 'standard';
}>;

// eslint-disable-next-line react/display-name
export const TextInput = React.forwardRef(
  (
    {
      autoFocus,
      className,
      error,
      inputProps,
      label,
      onChange,
      required,
      value,
      variant = 'standard',
      ...restOfProps
    }: TextInputProps,
    ref
  ) => (
    <TextField
      autoFocus={autoFocus}
      className={className}
      error={!!error}
      helperText={error}
      InputProps={inputProps}
      label={label}
      onChange={onChange}
      required={required}
      value={value}
      variant={variant}
      {...restOfProps}
    />
  )
);
