import axios from 'axios';

// Create Axios instance with base configuration
const instance = axios.create({
    baseURL: 'http://92.51.39.155:5000', // Base URL without the endpoint path
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

// Function to refresh the access token
export const refreshToken = async (refreshToken) => {
    try {
        const response = await instance.post('/auth/refresh', { refresh_token: refreshToken });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('An error occurred. Please try again.');
        }
    }
};

// Add a request interceptor to include access token in headers
instance.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Add a response interceptor to handle token refresh if needed
instance.interceptors.response.use(
    response => response,
    async error => {
        const { config, response } = error;

        // Check if the error is due to unauthorized access
        if (response.status === 401 && !config.__isRetryRequest) {
            config.__isRetryRequest = true;

            const refreshTokenValue = localStorage.getItem('refreshToken');

            try {
                // Attempt to refresh the token
                const { accessToken } = await refreshToken(refreshTokenValue);
                localStorage.setItem('accessToken', accessToken);

                // Update the original request with the new token and retry it
                config.headers['Authorization'] = `Bearer ${accessToken}`;
                return instance(config);
            } catch (err) {
                console.error('Token refresh failed:', err.message);
                // Handle token refresh failure (e.g., redirect to login page)
                window.location.href = '/login'; // Adjust the redirect path as necessary
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
