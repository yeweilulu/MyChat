import request from '@/utils/request'
import {
    LOGIN_USER_INFO
} from '@/types/login'
//login
export const user_login = (userInfo: LOGIN_USER_INFO) => request.post('/user/login', { userInfo })