import axios from 'axios'

const service = axios.create({
    // baseURL:'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
    baseURL:'https://www.fastmock.site/mock/4395ecfb7def1f189da389f14eb618f2/api',
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

// 请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

// 响应拦截
service.interceptors.response.use((res)=>{
    const code:Number = res.data.code
    console.log(res);
    
    if (code !== 200) {
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err);
})

export default service