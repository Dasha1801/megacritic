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

export const getUserThumbs = (res) =>
  Axios.post(`${baseUrl}/userThumbs`, res).then(function (res) {
    return res.data;
  });
