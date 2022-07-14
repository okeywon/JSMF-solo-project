import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchComment(action) {
  try {
    const res = yield axios.get(`/api/comment/${action.payload}`);
    yield put({ type: 'SET_COMMENT', payload: res.data });
  } catch (err) {
    console.log('Comment get request failed in saga', err);
    return;
  }
}

function* addComment(action) {
  // console.log("Adding a Comment, reached detail.saga", action);
  try {
    yield axios.post(`/api/comment/${action.payload.appID}`, action.payload);
    yield put({type: 'FETCH_DETAIL', payload: action.payload.appID});
  }
  catch (err) {
      console.log('Error in detail saga in addComment', err);
      return;
  }
}
    
function* commentSaga() {
  yield takeLatest('FETCH_COMMENT', fetchComment);
  yield takeLatest('ADD_COMMENT', addComment);
}
  
export default commentSaga;