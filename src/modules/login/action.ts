import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './type';

export const login = (userInfo: any) => {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

export const login_success = (userInfo: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userInfo
    }
}

export const login_fail = (error: any) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}
