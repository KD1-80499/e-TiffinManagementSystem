import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8443/users/',
  headers: {
    'Content-Type': 'application/json',
  },
});
