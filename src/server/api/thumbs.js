import Axios from 'axios';
import { baseUrl } from './baseUrl';

export const sendThumbs = (res) =>
  Axios.post(`${baseUrl}/thumbs`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const getThumbs = () =>
  Axios.get(`${baseUrl}/thumbs`).then(function (res) {
    return res.data;
  });
