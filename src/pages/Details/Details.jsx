import { useFetchEvent } from 'hooks/useFetchEvent';
import { useNavigate, useLocation } from 'react-router-dom';

export const Details = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  return (
    <>
      <button
        onClick={() => navigate(location?.state?.from ?? '/')}
        type="button"
      >
        Go back
      </button>
      {event && (
        <div>
          <h3>{event.name}</h3>
          <p>{event.info}</p>
          <img src={event.images[1].url} alt={event.name} width="320" />
        </div>
      )}
    </>
  );
};
