/**
 * 开发任务相关接口
 */
import request from '@/utils/axiosReq'
export function getLessonMissionByChapterId(data){
  return request({
    url: '/lesson-mission/getLessonMission?id='+data,
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
  })
}
export function saveLessonMission(data){
  return request({
    url: '/lesson-mission/saveLessonMission',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateLessonMissionById(data) {
  return request({
    url: '/lesson-mission/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function removeLessonMissionById(data) {
  return request({
    url: '/lesson-mission/removeById?id='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}

