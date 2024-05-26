import { TextField } from '@mui/material';
import React from 'react';

export type TextInputProps = Readonly<{
  className?: string;
  error?: string | null | undefined;
  label?: string;
  maxLength?: number | undefined;
  required?: boolean;
}>;

// eslint-disable-next-line react/display-name
export const TextInput = React.forwardRef(
  ({ className, error, label, maxLength, required, ...restOfProps }: TextInputProps, ref) => (
    <TextField
      className={className}
      error={!!error}
      helperText={error}
      inputProps={{ maxLength }}
      label={label}
      required={required}
      {...restOfProps}
    />
  )
);
