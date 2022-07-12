// import request from '@/utils/axiosReq'

// export function loginReq(data) {
//   return request({
//     url: '/integration-front/user/loginValid',
//     data,
//     method: 'post',
//     bfLoading: false,
//     isParams: true,
//     isAlertErrorMsg: false
//   })
// }

// export function getInfoReq() {
//   return request({
//     url: '/integration-front/user/getUserInfo',
//     bfLoading: false,
//     method: 'post',
//     isAlertErrorMsg: false
//   })
// }

// export function logoutReq() {
//   return request({
//     url: '/integration-front/user/loginOut',
//     method: 'post'
//   })
// }
import request from '@/utils/mockAxiosReq'

export function loginReq(data) {
  return request({
    url: '/api/user/login',
    data,
    method: 'post',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}


export function getInfoReq() {
  return request({
    url: '/api/user/getUserInfo',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false
  })
}

export function logoutReq() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}