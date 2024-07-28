import axios from 'axios';

// Create Axios instance with base configuration
const instance = axios.create({
    baseURL: 'http://92.51.39.155:5000',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export const loginUser = async (username, password) => {
    try {
        // Make a POST request to the /auth endpoint
        const response = await instance.post('/auth', { email: username, password });

        // Extract the access token, refresh token, and user type from the response data
        const { access_token, refresh_token, userType } = response.data;

        // Return the extracted values
        return { access_token, refresh_token, userType };
    } catch (error) {
        // Log error details

        if (error.response && error.response.data) {
            const { access_token, refresh_token } = error.response.data;

            // Check if the error response contains tokens and return them
            if (access_token && refresh_token) {
                return { access_token, refresh_token, userType: null }; // Adjust as needed
            }

            throw new Error(error.response.data.message);
        } else {
            throw new Error('An error occurred. Please try again.');
        }
    }
};

export const sendCode = async (email) => {
    try {
        const response = await instance.post('/resetpassword/sendcode', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to send code.');
    }
};

export const verifyCode = async (email, code) => {
    try {
        const response = await instance.post('/resetpassword/verifycode', { email, code });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to verify code.');
    }
};


export default instance;
