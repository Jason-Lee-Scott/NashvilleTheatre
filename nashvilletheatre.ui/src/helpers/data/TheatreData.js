import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const getAllTheatres = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/theatre`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
})

const getAllTheatreCoOrders = (theatreCoId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/theatre/${theatreCoId}/orders`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
})

const getAllTheatreCoOrdersThisMonth = (theatreCoId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/theatre/${theatreCoId}/orders/currentmonth`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
})

const getAllTheatreCoTotalSalesByMonth = (theatreCoId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/theatre/${theatreCoId}/totalcreditsbymo`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
})

export {
  getAllTheatres,
  getAllTheatreCoOrders,
  getAllTheatreCoOrdersThisMonth,
  getAllTheatreCoTotalSalesByMonth
};

