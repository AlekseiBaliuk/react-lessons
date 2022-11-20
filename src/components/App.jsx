import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Events } from 'pages/Events/Events';
import { SubEvent } from 'pages/SubEvent/SubEvent';
import { Details } from 'pages/Details/Details';
import { EventSeachPage } from 'pages/EventSeachPage/EventSeachPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />}>
          <Route path=":id" element={<SubEvent />} />
        </Route>
        <Route path="search" element={<EventSeachPage />}>
          <Route path=":id" element={<SubEvent />} />
        </Route>
      </Route>
      <Route path="/events/:id/details" element={<Details />} />
      <Route path="/search/:id/details" element={<Details />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
