import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllShows = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/show`).then((result) => {
        const allShows = result.data;
        resolve(allShows);
    }).catch((error) => reject(error));
});

export default { getAllShows };
 