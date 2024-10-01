import axios from 'axios';
import { requestInterceptor } from './requestInterceptor';
import {
  responseInterceptorFailed,
  responseInterceptorSuccessful
} from './responseInterceptor';
const baseURL = 'http://localhost:3000';
const axoisClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axoisClient.interceptors.request.use((config) => requestInterceptor(config));

axoisClient.interceptors.response.use(
  (response) => responseInterceptorSuccessful(response),
  (error) => responseInterceptorFailed(error)
);
