import { useHistory } from 'react-router';
import { all, takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import { ELoginStatus } from './type';
import authenAPI from '../../api/authenApi';



function* loginMiddleware(action: any): any {
    try {
        const res = yield call(() => authenAPI.login(action.payload));
        yield put({ type: ELoginStatus.LOGIN_SUCCESS, payload: res.data });

    } catch (error: any) {
        yield put({ type: ELoginStatus.LOGIN_FAIL, payload: error.response.data.message });
    }
}




export default function* handleLogin() {
    yield takeLatest(ELoginStatus.LOGIN, loginMiddleware);
}

