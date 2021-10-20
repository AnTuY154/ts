import { userState } from './type'
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './type';
const initialState: userState = {
    userName: '',
    isLogin: false,
    loading: false,
    error: false
};


const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loading: true
            };
        }
        case LOGIN_SUCCESS: {
            // May be save access here
            return {
                ...state,
                isLogin: true,
                loading: false,
                userName: action.payload.userName
            };
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
        default: {
            return state // We return the default state here
        }
    }
}

export default userReducer;