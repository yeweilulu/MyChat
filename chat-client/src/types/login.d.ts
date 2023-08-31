

export interface LOGIN_USER_INFO {
    username: string
    password: string
}
export type LOGIN_TYPE = 'login' | 'signin';
export interface LOGIN_REXUCER_ACTION {
    type: string,
    payload?: any
}
export interface LOGIN_REXUCER_STATE {
    loginType: LOGIN_TYPE,
    loading: boolean,
    username: string,
    token: string
}
export interface LOGIN_UI_PROPS extends LOGIN_REXUCER_STATE {
    userLogin: (params: LOGIN_USER_INFO) => void
    userSignin: (params: LOGIN_USER_INFO) => void
    setLoginType: (params: LOGIN_TYPE) => void
    setLoading: (params: boolean) => void
}
