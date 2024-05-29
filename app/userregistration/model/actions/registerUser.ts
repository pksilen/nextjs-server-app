'use server';

import { revalidatePath } from 'next/cache';
import { ValidationError } from 'yup';
import { userSchema } from '@/app/userregistration/components/userregistrationform/userSchema';
import { User } from '@/app/userregistration/model/User';
import { userService } from '@/app/userregistration/services/FakeUserService';

export async function registerUser(prevState: any, formData: FormData) {
  const user = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    streetAddress: formData.get('streetAddress'),
    zipCode: formData.get('zipCode'),
    city: formData.get('city'),
    email: formData.get('email'),
    phoneNumber: formData.get('phoneNumber')
  };

  try {
    userSchema.validateSync(user);
  } catch (error) {
    return {
      errorMessage: (error as ValidationError).errors.join(', ')
    };
  }

  await userService.registerUser(user as User);
  revalidatePath('/userregistration');
}
