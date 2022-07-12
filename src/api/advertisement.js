/**
 * 信息模块相关接口
 */
import request from '@/utils/axiosReq'
export function getAdvertisementByPage(data){
  return request({
    url: '/advertisement/getAdvertisementByPage',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function saveAdvertisement(data){
  return request({
    url: '/advertisement/saveAdvertisement',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateById(data) {
  return request({
    url: '/advertisement/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
/**
 *
 * @param data ?ids='+data
 * @returns {*}
 */
export function removeByIds(data) {
  return request({
    url: '/advertisement/removeByIds?ids='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}
