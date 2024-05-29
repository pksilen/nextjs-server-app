import { Button as MuiButton } from '@mui/material';
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  variant?: 'text' | 'contained' | 'outlined';
}>;

export const Button = ({ children, className, disabled, onClick, variant }: Props) => (
  <MuiButton
    className={className}
    color="primary"
    disabled={disabled}
    onClick={onClick}
    variant={variant ?? 'contained'}
  >
    {children}
  </MuiButton>
);
