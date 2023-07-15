import YXRequest from './request/index.js'



/**
 * 大屏页 网络请求
 */


export function getScreenData(){
    return YXRequest.get({
        url:'/powerscreen'
    })
}