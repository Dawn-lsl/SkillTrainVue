import request from '@/utils/axiosReq'
/**
 * 文件上传
 * @return{*}
 */
export function upload(data){
  return request({
    url: '/skill/upload',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false,
    isUploadFile:true,
    data
  })
}
/**
 * 导出课程信息
 * @param data
 * @returns {*}
 */
export function exportExcel() {
  return request({
    url: '/skill/exportExcel',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false,
    isDownLoadFile: true
  })
}
/**
 * 下载模板
 * @param data
 * @returns {*}
 */
export function downloadModel() {
  return request({
    url: '/skill/downloadModel',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false,
    isDownLoadFile: true,
    isParams: true,
    data: {
    }
  })
}
/**
 * 导入模板
 * @param data
 * @returns {*}
 */
export function importExcel(data) {
  return request({
    url: '/skill/importExcel',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false,
    isUploadFile: true,
    data
  })
}
