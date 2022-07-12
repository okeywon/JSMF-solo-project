import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetail(action) {
  // console.log('in fetchDetail', action);
  try {
    const res = yield axios.get(`/api/admin/${action.payload}`);
    yield put({ type: 'SET_DETAIL', payload: res.data });
  } catch (err) {
    console.log('Admin list get request failed', err);
    return;
  }
}  

function* addComment(action) {
  // console.log("Adding a Comment, reached detail.saga", action);
  try {
    yield axios.post(`/api/admin/${action.payload.appID}`, action.payload);
    yield put({type: 'FETCH_DETAIL', payload: action.payload.appID});
  }
  catch (err) {
      console.log('Error in detail saga in addComment', err);
      return;
  }
}
  
function* detailSaga() {
  yield takeLatest('FETCH_DETAIL', fetchDetail);
  yield takeLatest('ADD_COMMENT', addComment);
}
    
export default detailSaga;