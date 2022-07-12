/**
 * 学习记录相关接口
 */
import request from '@/utils/axiosReq'
export function getStudyRecordByPage(data){
  return request({
    url: '/study-record/getStudyRecordByPage',
    bfLoading: true,
    method: 'post',
    isAlertErrorMsg: true,
    data
  })
}
