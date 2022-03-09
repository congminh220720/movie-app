import axios from "axios";
import queryString from 'query-string'

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL:apiConfig.baseUrl,
    headers : {
        'content-Type': 'application.json'
    },

    paramsSerializer: params => queryString.stringify({
        ...params,
        api_key:apiConfig.apiKey
    })
})

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((respone) => {
    if(respone && respone.data){
        return respone.data
    }

    return respone
    
},(error) => {
    throw Error
})

export default axiosClient;