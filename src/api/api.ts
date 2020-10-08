import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

export default api;
