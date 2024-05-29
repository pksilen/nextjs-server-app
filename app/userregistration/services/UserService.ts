import { User } from '@/app/userregistration/model/User';

export interface UserService {
  registerUser(user: User): Promise<User>;
  getUsers(): Promise<User[]>;
}
