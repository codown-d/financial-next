import { message } from 'antd';
import axios, { AxiosResponse } from 'axios';

const axiosIns = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // API 基础 URL
  timeout: 5000, // 超时设置
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosIns.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么，例如添加 token
    // const token = localStorage.getItem('token'); // 假设你将 token 存储在 localStorage
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
axiosIns.interceptors.response.use(
  (response:AxiosResponse<any, any>) => {
    // 处理响应数据
    console.log(response.data)
    return response.data; // 直接返回数据
  },
  (error) => {
    // 处理响应错误
    const { response } = error;
    console.log('response', response,error)
    if (response) {
      // 根据响应状态码处理不同的情况
      console.error('API error:', response);
    } else {
      // 处理网络错误
      message.error(error.message);
      console.error('Network error:', error);
    }
    return Promise.reject(error);
  }
);

export default axiosIns;
