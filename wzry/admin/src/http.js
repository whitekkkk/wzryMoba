import axios from 'axios'

import Vue from 'vue'

import router from './router'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api'
    //baseURL: 'http://localhost:3000/admin/api'
})

//加一个请求头
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.token){
        config.headers.Authorization ='Bearer ' + localStorage.token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


//加入响应拦截器，全局捕获错误，前端收到任何错误都会进入响应拦截器
http.interceptors.response.use(res => {
    return res
}, err => {
    if(err.response.data.message){//当存在错误信息时
            Vue.prototype.$message({ //使用elementUi的$message方法，将错误信息展现在前端页面
                type:'error',
                message: err.response.data.message
        })
        if(err.response.status === 401){
            router.push('/login')
        }
    }

    return Promise.reject(err)
})

export default http //暴露变量http