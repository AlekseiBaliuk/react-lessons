import axios from 'axios';

const KEY = '4KV9Chpg2H2cGNoEZkUT6nJwkLvlEuMx';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

export async function fetchEvents() {
  const response = await axios.get(`events?size=20&apikey=${KEY}`);
  return response.data._embedded.events;
}

export async function fetchEventById(id) {
  const response = await axios.get(`events/${id}?apikey=${KEY}`);
  return response.data;
}

export async function fetchEventsByName(keyWord) {
  const response = await axios.get(
    `events?size=20&apikey=${KEY}&keyword=${keyWord}`
  );
  return response.data._embedded.events;
}
