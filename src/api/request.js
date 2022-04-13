import axios from 'axios'

// 1.创建axios的实例
const service = axios.create({
    baseURL: '/',
    timeout: 10000
})

// 2.axios的拦截器
// 2.1.请求拦截的作用
service.interceptors.request.use(config => {
    return config;
}, error => {
    console.log(error);
})
// 3.axios
service.interceptors.response.use(res => {
    return res.data;
}, error => {
    console.log(error);
})

export default service