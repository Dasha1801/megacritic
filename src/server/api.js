import Axios from 'axios';

const baseUrl = 'https://secure-temple-92041.herokuapp.com/api/reviews';
// const baseUrl = 'http://localhost:3001/api/reviews';

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

export const getAllMyPost = (name) =>
  Axios.get(`${baseUrl}/published`).then(function (res) {
    const data = res.data;
    return data.filter((el) => el.name === name);
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
