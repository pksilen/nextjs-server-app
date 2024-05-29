import { getUsers } from '@/app/userregistration/model/actions/getUsers';

export const UserList = async () => {
  const users = await getUsers();

  const userListItems = users.map(
    ({ id, firstName, lastName, streetAddress, zipCode, city, email, phoneNumber }) => (
      <li
        key={id}
      >{`${firstName}, ${lastName}, ${streetAddress}, ${zipCode}, ${city}, ${email}, ${phoneNumber}`}</li>
    )
  );

  return (
    <section>
      <h2>Users</h2>
      <ul>{userListItems}</ul>
    </section>
  );
};
