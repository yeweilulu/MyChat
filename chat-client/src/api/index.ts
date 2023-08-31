import request from '@/utils/request'
import {
    LOGIN_USER_INFO
} from '@/types/login'
//login
export const user_login = (userInfo: LOGIN_USER_INFO) => request.post('/user/login', { ...userInfo })
//signin
export const user_signin = (userInfo: LOGIN_USER_INFO) => request.post('/user/signin', { ...userInfo })