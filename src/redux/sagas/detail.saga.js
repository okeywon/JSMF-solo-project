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

function* addVote(action) {
  console.log("Adding a Vote, reached detail.saga", action);
  try {
    yield axios.post(`/api/detail/${action.payload.appID}`, action.payload);
    yield put({type: 'FETCH_DETAIL', payload: action.payload.appID});
  }
  catch (err) {
      console.log('Error in detail saga in addVote', err);
      return;
  }
}
  
function* detailSaga() {
  yield takeLatest('FETCH_DETAIL', fetchDetail);
  yield takeLatest('ADD_COMMENT', addComment);
  yield takeLatest('ADD_VOTE', addVote);
}
    
export default detailSaga;