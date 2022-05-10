import instance from './axios';
import { Platform } from 'react-native';


export const Login = async (value) => {
    return await instance.get('/Users?Email=' + value.email + '&Password=' + value.password);
};
export const Register = async (value) => {
    return await instance.post('/users', value)
}