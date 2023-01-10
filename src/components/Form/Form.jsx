import { useDispatch } from 'react-redux';
import { addUser } from 'redux/usersOparations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSabmit = e => {
    e.preventDefault();
    const form = e.target;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
    };

    dispatch(addUser(user));
    form.reset();
  };

  return (
    <form onSubmit={handleSabmit}>
      <label>
        Name
        <input type="text" name="name" placeholder="Name" title="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="Email" title="email" />
      </label>
      <button>Add user</button>
    </form>
  );
};
