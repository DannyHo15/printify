import { AxiosResponse } from 'axios';

export const responseInterceptorSuccessful = (response: AxiosResponse) => {
  console.log('Response:', response);
  return response;
};

export const responseInterceptorFailed = (error: Error) => {
  console.error('Error:', error);
  return Promise.reject(error);
};
