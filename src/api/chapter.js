/**
 * 章节模块相关接口
 */
import request from '@/utils/axiosReq'
export function getChapter(data){
  return request({
    url: '/chapter/getChapter?id='+data,
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
  })
}
export function saveChapter(data){
  return request({
    url: '/chapter/saveChapter',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function updateChapterById(data) {
  return request({
    url: '/chapter/updateById',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
export function removeChapterById(data) {
  return request({
    url: '/chapter/removeById?id='+data,
    bfLoading: true,
    method: 'get',
    isAlertErrorMsg: true,
  })
}
