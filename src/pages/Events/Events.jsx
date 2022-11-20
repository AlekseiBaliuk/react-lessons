import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'services/services';
import { EventsList } from 'components/EventsList/EventsList';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <EventsList events={events} location={location} />

      <Outlet />
    </>
  );
};
