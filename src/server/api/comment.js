import Axios from 'axios';
import { baseUrl } from './baseUrl';

export const sendComment = (res) =>
  Axios.post(`${baseUrl}/comments`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const getComments = (res) =>
  Axios.post(`${baseUrl}/allComments`, res).then(function (res) {
    return res.data;
  });
