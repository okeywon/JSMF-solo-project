import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetail(action) {
  // console.log('in fetchDetail', action);
  try {
    const res = yield axios.get(`/api/detail/${action.payload}`);
    yield put({ type: 'SET_DETAIL', payload: res.data });
  } catch (err) {
    console.log('fetchDetail request failed', err);
    return;
  }
}  
  
function* detailSaga() {
  yield takeLatest('FETCH_DETAIL', fetchDetail);
}
    
export default detailSaga;