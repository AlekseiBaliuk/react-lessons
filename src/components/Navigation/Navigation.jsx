import * as SC from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        <li>
          <SC.Link to="/events">Events</SC.Link>
        </li>
        <li>
          <SC.Link to="/search">Search</SC.Link>
        </li>
      </ul>
    </nav>
  );
};
