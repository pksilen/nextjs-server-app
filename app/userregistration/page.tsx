import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';
import classes from './page.module.scss';

export default function UserRegistrationPage() {
  return (
    <main className={classes.main}>
      <UserRegistrationForm />
      <div className={classes.verticalDivider}></div>
      <UserList />
    </main>
  );
}
