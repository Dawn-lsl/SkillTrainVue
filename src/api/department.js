/**
 * 赛项模块相关接口
 */
import request from '@/utils/axiosReq'

export function getDepartment(data){
  return request({
    url: '/department/getDepartment',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}

export function saveDepartment(data){
  return request({
    url: '/department/saveDepartment',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateById(data) {
  return request({
    url: '/department/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}

export function removeById(data) {
  return request({
    url: '/department/removeById?id='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}

