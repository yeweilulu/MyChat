
import { Dispatch } from 'redux'
import { user_login } from '@/api/index'
import { LOGIN_USER_INFO } from '@/types/login'
export const userLogin = (params: LOGIN_USER_INFO) => {
    return async (dispatch: Dispatch) => {
        let res = await user_login(params)
        dispatch({
            type: "USER_LOGIN",
            payload: null
        })
    }
}