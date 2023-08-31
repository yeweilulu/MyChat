import { LOGIN_REXUCER_ACTION } from '@/types/login'
import { LOGIN_REXUCER_STATE } from '@/types/reducer'

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
