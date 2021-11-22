import Axios from 'axios';
import { baseUrl } from './baseUrl';

export const sendPost = (res) =>
  Axios.post(`${baseUrl}`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const getAllPost = () =>
  Axios.get(`${baseUrl}/published`).then(function (res) {
    return res.data;
  });

export const getAllBooks = () =>
  Axios.get(`${baseUrl}/books`).then(function (res) {
    return res.data;
  });

export const getAllGames = () =>
  Axios.get(`${baseUrl}/games`).then(function (res) {
    return res.data;
  });

export const getAllMovies = () =>
  Axios.get(`${baseUrl}/movies`).then(function (res) {
    return res.data;
  });

export const getAllMyPost = (email) =>
  Axios.get(`${baseUrl}/published`).then(function (res) {
    const data = res.data;
    return data.filter((el) => el.name === email);
  });

export const updatePost = (res) =>
  Axios.put(`${baseUrl}/${res.id}`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

export const deletePost = (res) =>
  Axios.delete(`${baseUrl}/${res.id}`, res)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
