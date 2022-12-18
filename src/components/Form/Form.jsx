import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/userSlice';
import { apiStatus } from 'services/apiStatus';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setAge(value);
  };

  const onFormSubmit = async e => {
    e.preventDefault();

    const status = await apiStatus();

    const newUser = {
      name,
      age,
      id: nanoid(),
      status,
    };

    dispatch(addContact(newUser));

    setName('');
    setAge('');

  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler}
        />
      </label>
      <label>
        Age
        <input
          type="number"
          name="age"
          value={age}
          onChange={onChangeHandler}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};
