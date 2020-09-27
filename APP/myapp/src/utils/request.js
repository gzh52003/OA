/**
 * 二次封装
 */

import axios from 'axios';


// const baseUrl = process.env.NODE_ENV === 'production' ? "http://120.24.89.48:2005/" : "http://localhost:2005/"

// const request = axios.create({
//     baseURL:baseUrl + 'api',
//     withCredentials:true
// });

const request = axios.create({
    baseURL:'http://localhost:2003/api',
    withCredentials:true
})

export async function get(url,data,config={}){
    const {data:result} = await request({
        ...config,
        url,
        method:'get',
        params:data
    })
    return result;
}

export async function post(url,data,config={}){
    const {data:result} = await request({
        ...config,
        url,
        method:'post',
        data
    })

    return result;
}

export async function put(url,data,config={}){
    const {data:result} = await request.put(url,data,config);

    return result;
}


export async function remove(url,data,config={}){
    const {data:result} = await request.delete(url,{
        ...config,
        params:data
    });

    return result;
}

export default {
    get,
    post,
    put,
    remove,
    // patch
};