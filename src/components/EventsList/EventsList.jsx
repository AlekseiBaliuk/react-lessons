import { Link } from 'react-router-dom';
export const EventsList = ({ events, location }) => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link
            to={event.id}
            state={{ from: location.pathname + location.search }}
          >
            {event.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
