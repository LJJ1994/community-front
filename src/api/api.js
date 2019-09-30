import axios from '../http'

/*
  登录接口
  @data { mobile, password }
 */
export const Login = (params) => {
  return axios({
    url: `/api/users/signin`,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json; charset:UTF-8'
    }
  })
}

/*
* @param { user_id }
* */
export const GetUser = (params) => {
  return axios({
    url: `/api/users/${params}`,
    method: 'get'
  })
}

/*
* @params { user_id }
* @data {username, signature, value}
*
* */
export const UserEdit = (user_id, params) => {
  return axios({
    url: `/api/users/${user_id}/edit`,
    data: params,
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset:UTF-8'
    }
  })
}

/**
 * @data {avatar}
 */
export const UploadAvatar = (params) => {
  return axios({
    url: `/api/users/avatar`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: params
  })
}

