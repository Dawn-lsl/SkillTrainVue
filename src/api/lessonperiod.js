/**
 * 学习内容相关接口
 */
import request from '@/utils/axiosReq'
export function getLessonPeriodByChapterId(data){
  return request({
    url: '/lesson-period/getLessonPeriod?id='+data,
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
  })
}
export function saveLessonPeriod(data){
  return request({
    url: '/lesson-period/saveLessonPeriod',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateLessonPeriodById(data) {
  return request({
    url: '/lesson-period/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function removeLessonPeriodById(data) {
  return request({
    url: '/lesson-period/removeById?id='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}
