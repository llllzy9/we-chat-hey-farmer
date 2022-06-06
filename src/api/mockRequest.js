//对于axios进行二次封装
import axios from 'axios';

//1.利用axios对象的方法create，去创建一个axios实例
//2.request就是axios，只不过配置一下
const request = axios.create({
    //配置对象
    baseURL: "/mock",
    //请求超时时间
    timeout: 5000,
});


//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求之前做一些事情
request.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，header请求头
    return config;
});

//响应拦截器
request.interceptors.response.use((res) => {
    //成功的回调函数：服务响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
});

export default request;