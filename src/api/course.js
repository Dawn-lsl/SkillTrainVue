/**
 * 课程模块相关接口
 */
import request from '@/utils/axiosReq'

export function getCourseByPage(data){
  return request({
    url: '/course/getCourseByPage',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}

export function saveCourse(data){
  return request({
    url: '/course/saveCourse',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateById(data) {
  return request({
    url: '/course/updateById',
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
    url: 'course/removeByIds?ids='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}
export function getCourseById(data) {
  return request({
    url: 'course/getCourseById?id='+data,
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
  })
}
