
import { Dispatch } from 'redux'
import { user_login, user_signin } from '@/api/index'
import { LOGIN_USER_INFO } from '@/types/login'

//login
export const userLogin = (params: LOGIN_USER_INFO) => {
    return async (dispatch: Dispatch) => {
        let res = await user_login(params)
        dispatch({
            type: "USER_LOGIN",
            payload: null
        })
    }
}
//signin
export const userSignin = (params: LOGIN_USER_INFO) => {
    return async (dispatch: Dispatch) => {
        let res = await user_signin(params)
        dispatch({
            type: "USER_LOGIN",
            payload: null
        })
    }
}