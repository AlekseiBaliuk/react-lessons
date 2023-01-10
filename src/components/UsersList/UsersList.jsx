import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors';
import { deleteUser } from 'redux/usersOparations';

export const UsersList = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <ul>
      {users.map(({ name, id, email }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{email}</p>
          <button type="button" onClick={() => dispatch(deleteUser(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
