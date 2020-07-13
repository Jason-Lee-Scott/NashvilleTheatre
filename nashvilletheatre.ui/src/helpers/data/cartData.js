import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const getUsersCart = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/cart/${uid}`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

export { getUsersCart };