import Axios from 'axios';
import { baseUrl } from './baseUrl';

export const sendRating = (res) =>
  Axios.post(`${baseUrl}/ratings`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const getRatingsReview = (res) =>
  Axios.post(`${baseUrl}/ratingsReview`, res).then(function (res) {
    return res.data;
  });
