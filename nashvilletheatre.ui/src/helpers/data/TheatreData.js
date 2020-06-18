import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const getAllTheatres = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/theatre`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
})

export { getAllTheatres };

