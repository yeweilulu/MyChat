
import { Dispatch } from 'redux'
import { user_login, user_signin } from '@/api/index'
import { LOGIN_USER_INFO, LOGIN_TYPE } from '@/types/login'

//login
export const userLogin = (params: LOGIN_USER_INFO) => {
    return async (dispatch: Dispatch) => {
        let res = await user_login(params)
        dispatch({
            type: 'USER_LOGIN',
            payload: res
        })
    }
}
//signin
export const userSignin = (params: LOGIN_USER_INFO) => {
    return async (dispatch: Dispatch) => {
        await user_signin(params)
        dispatch({
            type: "SET_LOADING",
            payload: false
        })
    }
}
//切换登录或者注册
export const setLoginType = (params: LOGIN_TYPE) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "SET_LOGIN_TYPE",
            payload: params
        })
    }
}
//
export const setLoading = (params: boolean) => {

    return (dispatch: Dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: params
        })
    }
}