export interface userState {
    userName: string,
    isLogin: boolean,
    loading: boolean,
    error: any,
}

export const LOGIN = 'LOGIN'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const LOGIN_FAIL = 'LOGIN_FAIL'