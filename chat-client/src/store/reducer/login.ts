import { LOGIN_REXUCER_ACTION, LOGIN_REXUCER_STATE, LOGIN_TYPE } from '@/types/login'

const initialState = {
    loginType: 'login' as LOGIN_TYPE,
    loading: false,
    username: "",
    token: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: LOGIN_REXUCER_STATE = initialState, { type, payload }: LOGIN_REXUCER_ACTION) => {
    switch (type) {

        case 'USER_LOGIN':
            if (payload != null) {
                localStorage.setItem('token', payload.token)
                localStorage.setItem('username', payload.username)
            }
            return {
                ...state,
                ...payload,
                loading: false
            }
        case 'SET_LOGIN_TYPE':
            return {
                ...state,
                loginType: payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: payload
            }
        default:
            return state
    }
}
