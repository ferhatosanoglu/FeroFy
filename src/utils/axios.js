import axios from 'axios';
import Storage from './storage';

export const baseURL = 'https://ferofy.herokuapp.com';

const instance = axios.create({
    baseURL: 'https://ferofy.herokuapp.com',
    timeout: 15 * 1000,
});

instance.interceptors.request.use(async options => {
    const accessToken = await Storage.getItem('accessToken');
    if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        options.headers.authorization = 'Bearer ' + accessToken;
    }
    return options;
});

instance.interceptors.response.use(response => {
    if (response.status > 300) {
        // console.log('Error from server: ', response.data);
    }
    return response;
});

export const sendFormData = async (
    endpoint,
    formData,
    config = {
        method: 'POST',
    },
) => {
    const accessToken = await Storage.getItem('accessToken');
    const result = await fetch(new URL(endpoint, baseURL).toString(), {
        method: config.method,
        body: formData,
        headers: {
            ...config,
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const data = await result.json();
    return { data };
};

export default instance;