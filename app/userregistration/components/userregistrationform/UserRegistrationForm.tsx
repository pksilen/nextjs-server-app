'use client';

import { useFormState } from 'react-dom';
import { ErrorAlert } from '@/app/common/components/alerts/ErrorAlert';
import { SubmitButton } from '@/app/common/components/buttons/SubmitButton';
import { TextInput } from '@/app/common/components/inputs/TextInput';
import { registerUser } from '@/app/userregistration/model/actions/registerUser';
import { camelCaseIdentifierToWords } from '@/app/userregistration/utils/camelCaseIdentifierToWords';
import classes from './UserRegistrationForm.module.scss';
import { UserSchema } from './userSchema';

export const UserRegistrationForm = () => {
  // @ts-ignore
  const [state, tryRegisterUser] = useFormState(registerUser, { errorMessage: '' });

  const createTextInput = (fieldName: keyof UserSchema) => (
    <TextInput
      inputProps={{ name: fieldName }}
      label={camelCaseIdentifierToWords(fieldName)}
      required={true}
      variant="outlined"
    />
  );

  return (
    <form action={tryRegisterUser} className={classes.form}>
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
      {state?.errorMessage && <ErrorAlert>{state.errorMessage}</ErrorAlert>}
    </form>
  );
};
