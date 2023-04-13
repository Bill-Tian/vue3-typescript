import service from "@/utils/request";
interface loginData{
    username:string,
    password:string
}
const baseapi = '/api'
export function login(data:loginData){
    return service({
        url:baseapi + '/users/login',
        method:'post',
        data
    })
}

export function getUserInfo(){
    return service({
        url:baseapi + '/users/getUserInfo',
        method:'get'
    })
}

export function getGoodslist(){
    return service({
        url:baseapi + '/getGoodslist',
        method:'get'
    })
}