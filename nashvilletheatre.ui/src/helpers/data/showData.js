import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllShows = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/show/allshowsbydate`).then((result) => {
        const allShows = result.data;
        resolve(allShows);
    }).catch((error) => reject(error));
});

const searchShows = (searchTerm) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/show/search/${searchTerm}`).then((result) => {
        const searchResults = result.data;
        resolve(searchResults);
    }).catch((error) => reject(error));
});

export default { getAllShows, searchShows};
