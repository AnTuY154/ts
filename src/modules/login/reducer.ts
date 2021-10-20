import { userState } from './type'
import { ELoginStatus } from './type';
const initialState: userState = {
    userName: '',
    isLogin: false,
    loading: false,
    error: false
};


const userReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case ELoginStatus.LOGIN: {
            return {
                ...state,
                loading: true
            };
        }
        case ELoginStatus.LOGIN_SUCCESS: {
            // May be save access here
            return {
                ...state,
                isLogin: true,
                loading: false,
                userName: action.payload.userName
            };
        }
        case ELoginStatus.LOGIN_FAIL: {
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