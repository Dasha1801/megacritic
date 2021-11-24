import Axios from 'axios';
import { baseUrl } from './baseUrl';

export const getResult = (word) =>
  Axios.post(`${baseUrl}/search`, word).then(function (res) {
    return res.data;
  });
