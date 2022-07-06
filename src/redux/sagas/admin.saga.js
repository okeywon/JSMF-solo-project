import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAdmin() {
    try {
      const res = yield axios.get('/api/admin');
      // console.log(">>>>>>>>>>>>Saga", res);
      yield put({ type: 'SET_ADMIN', payload: res.data });
    } catch (err) {
      console.log('Admin list get request failed', err);
    }
  }

function* fetchDetail(action) {
  try {
    const res = yield axios.get(`/api/admin/${action.payload}`);
    yield put({ type: 'SET_DETAIL', payload: res.data });
  } catch (err) {
    console.log('Admin list get request failed', err);
    return;
  }
}  
  
function* adminSaga() {
  yield takeLatest('FETCH_ADMIN', fetchAdmin);
  yield takeLatest('FETCH_DETAIL', fetchDetail);
}
  
  export default adminSaga;
  