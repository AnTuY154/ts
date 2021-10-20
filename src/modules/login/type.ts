export interface userState {
    userName: string,
    isLogin: boolean,
    loading: boolean,
    error: any,
}

export enum ELoginStatus {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL'
}
