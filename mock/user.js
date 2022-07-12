export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: () => {
      return {
        flag: true,
        code: 20000,
        msg: '操作成功!',
        data: {
          jwtToken: 'jwtToken',
          email: null,
          username: 'admin'
        }
      }
    }
  },
  {
    url: '/api/user/getUserInfo',
    method: 'post',
    response: () => {
      return {
        msg: '操作成功!',
        flag: true,
        code: 20000,
        data: {
          exp: 1654759062,
          iat: 1654499862,
          username: 'admin'
        }
      }
    }
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return {
        "flag": true,
        "code": 20000,
        "msg": "操作成功！",
        "data": null
      }
    }
  }
]
