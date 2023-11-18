import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL, // Base URL for DRF API endpoint
    timeout: 10000,  // Time in milliseconds before the request times out
    headers: {
        'Content-Type': 'application/json',
        // You can add other headers as needed
    }
});

// Using interceptors, you can insert custom operations before each request or response.
// Example: Add a token to the header (needed when assigning to store administrators)
// API.interceptors.request.use(config => {
//     // For instance, retrieve a token from localStorage and add to the header
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

export { API };
