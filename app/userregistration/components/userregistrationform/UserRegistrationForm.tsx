'use client';

import { FieldPath } from 'react-hook-form';
import { ErrorAlert } from '@/app/common/components/alerts/ErrorAlert';
import { SubmitButton } from '@/app/common/components/buttons/SubmitButton';
import { TextInput, TextInputProps } from '@/app/common/components/inputs/TextInput';
import { createControlledFormInput } from '@/app/common/components/inputs/factories/createControlledFormInput';
import classes from './UserRegistrationForm.module.scss';
import { useUserRegistration } from './useUserRegistration';
import { UserSchema } from './userSchema';

const ControlledFormTextInput = createControlledFormInput<TextInputProps, UserSchema>(TextInput, {
  required: true,
  variant: 'outlined'
});

export const UserRegistrationForm = () => {
  const { error, form, handleUserRegistration } = useUserRegistration();

  const createTextInput = (formFieldName: FieldPath<UserSchema>) => (
    <ControlledFormTextInput
      formControl={form.control}
      formErrors={form.formState.errors}
      formFieldName={formFieldName}
    />
  );

  return (
    <form className={classes.form} onSubmit={handleUserRegistration}>
      <fieldset className={classes.inlineFields}>
        {createTextInput('firstName')}
        {createTextInput('lastName')}
      </fieldset>
      {createTextInput('streetAddress')}
      <fieldset className={classes.inlineFields}>
        {createTextInput('zipCode')}
        {createTextInput('city')}
      </fieldset>
      {createTextInput('email')}
      {createTextInput('phoneNumber')}
      <SubmitButton>Register</SubmitButton>
      {error && <ErrorAlert>Registration failed. Please try again.</ErrorAlert>}
    </form>
  );
};
