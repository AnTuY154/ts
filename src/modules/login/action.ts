import { ELoginStatus } from './type';

export const login = (userInfo: any) => {
    return {
        type: ELoginStatus.LOGIN,
        payload: userInfo
    }
}

export const login_success = (userInfo: any) => {
    return {
        type: ELoginStatus.LOGIN_SUCCESS,
        payload: userInfo
    }
}

export const login_fail = (error: any) => {
    return {
        type: ELoginStatus.LOGIN_FAIL,
        payload: error
    }
}
