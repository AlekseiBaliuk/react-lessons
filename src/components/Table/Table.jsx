import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { deleteContact, toggleStatus } from 'redux/userSlice';
import * as SC from './Table.styled';

export const Table = () => {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <SC.Table>
      <thead>
        <tr>
          <SC.Th>#</SC.Th>
          <SC.Th>Avatar</SC.Th>
          <SC.Th>Name</SC.Th>
          <SC.Th>Age</SC.Th>
          <SC.Th>Status</SC.Th>
          <SC.Th>Options</SC.Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <SC.Td>{index + 1}</SC.Td>
            <SC.Td>
              <Avatar name={user.name} size={40} round={true} />
            </SC.Td>
            <SC.Td>{user.name}</SC.Td>
            <SC.Td>{user.age}</SC.Td>
            <SC.Td>
              <SC.Span
                status={user.status}
                onClick={() => {
                  dispatch(toggleStatus(user.id));
                }}
              >
                {user.status === 'no' ? 'offline' : 'online'}
              </SC.Span>
            </SC.Td>
            <SC.Td>
              <SC.Button
                type="button"
                onClick={() => dispatch(deleteContact(user.id))}
              >
                Delete
              </SC.Button>
            </SC.Td>
          </tr>
        ))}
      </tbody>
    </SC.Table>
  );
};
