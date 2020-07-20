import axios from 'axios';
import {baseUrl} from '../apiKeys.json';

const uploadFile = (file) => new Promise((resolve, reject) => {
  let form = new FormData();
  form.append('file', file.raw);

  axios.post(`${baseUrl}/images`, form)
    .then(() => {
      console.log('file uploaded')
      resolve();
    })
    .catch(error => reject(error));
})

export { uploadFile };