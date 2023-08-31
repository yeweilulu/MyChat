import axios from 'axios'
import { message } from 'antd'
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PATH, // 在此可以统一增加前缀也可在.env文件中进行设置然后拼接
    timeout: 2500
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const res = response.data;

    if (res.code !== 200) {
        // switch (res.code) {
        //     case 401: message.error('未登录或登录超时')
        //         break;
        //     case 403: message.error('权限不足')
        //         break;
        //     case 500: message.error('服务器错误')
        //         break;
        //     default: message.error(res.message)
        //         break;
        // }
        message.error(res.message)
        return null
    }
    // 数据简写
    message.success(res.message)
    return res.data

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance