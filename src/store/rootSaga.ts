import { all, takeEvery, takeLatest, put, call, fork } from 'redux-saga/effects'
import handleLogin from '../modules/login/saga';


export default function* rootSaga() {
    console.log("Root");
    yield all([handleLogin()]);
}