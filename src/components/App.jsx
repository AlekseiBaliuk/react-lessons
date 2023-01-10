import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './Button/Button';
import { fetchUsers } from 'redux/usersOparations';
import { UsersList } from './UsersList/UsersList';
import { Form } from './Form/Form';

export const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  const dispatch = useDispatch();

  const showUsers = () => {
    setIsListShown(true);
    dispatch(fetchUsers());
  };

  const showForm = () => {
    setIsFormShown(true);
  };

  return (
    <>
      {isListShown ? (
        <>
          <UsersList />
          {isFormShown ? (
            <Form />
          ) : (
            <Button type="button" text="Add user" clickHandler={showForm} />
          )}
        </>
      ) : (
        <Button type="button" text="Show users" clickHandler={showUsers} />
      )}
    </>
  );
};
