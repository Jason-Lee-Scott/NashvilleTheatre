import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const getAllSubscriptionsByUserType = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/subscription/usertypeid/1`)
    .then((result) => resolve(result.data))
    .catch(error => reject(error))
});

export { getAllSubscriptionsByUserType };
