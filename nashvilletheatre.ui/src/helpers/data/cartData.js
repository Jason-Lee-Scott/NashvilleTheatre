import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const getUsersCart = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/cart/${uid}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getUsersCartId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/cart/user/${uid}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

const getLineItems = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/lineitem/cart/${id}`)
  .then((result) => resolve(result.data))
  .catch(error => reject(error))
});

const getShowLineItems = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/lineitem/shows/cart/${id}`)
  .then((result) => resolve(result.data))
  .catch(error => reject(error))
});

const getSubscriptionLineItems = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/lineitem/subscriptions/cart/${id}`)
  .then((result) => resolve(result.data))
  .catch(error => reject(error))
});

export {
  getUsersCartId,
  getLineItems,
  getUsersCart,
  getShowLineItems,
  getSubscriptionLineItems
};