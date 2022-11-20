import { Link, useLocation } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';

export const SubEvent = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="320" />
        </div>
      )}
      <Link to="details" state={location.state}>
        Details
      </Link>
    </>
  );
};
