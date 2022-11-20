import { useEffect, useState } from 'react';
import { fetchEventsByName } from 'services/services';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { EventsList } from 'components/EventsList/EventsList';

export const EventSeachPage = () => {
  const [events, setEvents] = useState(null);
  const [serchParams, setSearchParams] = useSearchParams();
  const query = serchParams.get('eventname');
  const location = useLocation();
  console.log(location);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.eventname.value;
    setSearchParams({ eventname: value });
  };

  useEffect(() => {
    if (!query) return;
    fetchEventsByName(query).then(setEvents);
  }, [query]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="eventname" type="text" />
        <button>Search</button>
      </form>

      {events && <EventsList events={events} location={location} />}
      <Outlet />
    </div>
  );
};
