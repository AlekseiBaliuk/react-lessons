import axios from 'axios';

export const apiStatus = async () => {
  const res = await axios('https://yesno.wtf/api');
  return res.data.answer;
};
