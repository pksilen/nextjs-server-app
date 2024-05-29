import { User } from '@/app/userregistration/model/User';
import { UserSchema } from '../components/userregistrationform/userSchema';
import { UserService } from './UserService';

class FakeUserService implements UserService {
  async registerUser(user: UserSchema): Promise<User> {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const userOrError = await response.json();

    if (response.ok) {
      return userOrError;
    } else {
      throw new Error(`${response.statusText}: ${userOrError.errorMessage}`);
    }
  }

  async getUsers(): Promise<User[]> {
    const response = await fetch('http://localhost:3001/users');
    return await response.json();
  }
}

export const userService = new FakeUserService();
