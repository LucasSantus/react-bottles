import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const ApiService = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});