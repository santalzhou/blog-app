import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8089'
})

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.timeout = 5000

request.interceptors.request.use(config => {
    // token
    return config;
})

request.interceptors.response.use(res => {
    if(res.status === 200 && res.data){
        return res.data;
    }
    return {success: false};
})

export { request as default}