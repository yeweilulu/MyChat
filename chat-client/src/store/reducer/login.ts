import { LOGIN_REXUCER_ACTION, LOGIN_REXUCER_STATE } from '@/types/login'

const initialState = {
    list: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: LOGIN_REXUCER_STATE = initialState, { type, payload }: LOGIN_REXUCER_ACTION) => {
    switch (type) {

        case '':
            return { ...state, ...payload }

        default:
            return state
    }
}
