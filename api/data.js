import axios from "./axios";
export const getMenu = (param) => {
    return axios.request({
        // url:接口相关的地址
        url:'/permission/getMenu',
        // method:接口类型
        method:'post',
        // data:传入的参数
        data:param
    })
}

export const getData = ()=>{
    return axios.request({
        url:'/home/getData',
        method: 'get'
    })
}

export const getUser = (params) => {
    console.log(params);
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}

// export const ddelUser = (params) => {
//     console.log(params);
//     return axios.request({
//         url: '/user/del',
//         method: 'post',
//         params
//     })
// }



