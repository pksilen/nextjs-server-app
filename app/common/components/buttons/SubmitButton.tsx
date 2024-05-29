'use client';

import { Button } from '@mui/material';
import React from 'react';
import { useFormStatus } from 'react-dom';

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export const SubmitButton = ({ children, className }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} size="large" type="submit" variant="contained">
      {children}
    </Button>
  );
};
