import { Login, Logout } from './mutation-types'

export default {
  [Login] (state) {
    state.is_authenticated = true
    const payload = JSON.parse(atob(window.localStorage.getItem("token").split('.')[1]))
    state.user_id = payload.user_id
    state.username = payload.user_name
  },
  [Logout] (state) {
    this.state.is_authenticated = false
    window.localStorage.removeItem('token')
    this.state.user_id = 0
    this.state.username = ''
  }
}
