/**
 * 用户模块相关接口
 */
import request from '@/utils/axiosReq'
export function getUserByPage(data){
  return request({
    url: '/user/getUserByPage',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function saveUser(data){
  return request({
    url: '/user/saveUser',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateById(data) {
  return request({
    url: '/user/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function removeByIds(data) {
  return request({
    url: '/user/removeByIds?ids='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}
