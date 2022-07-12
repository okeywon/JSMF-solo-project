import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchComment(action) {
    try {
      const res = yield axios.get(`/api/admin/${action.payload}`);
      yield put({ type: 'SET_COMMENT', payload: res.data });
    } catch (err) {
      console.log('Comment get request failed in saga', err);
      return;
    }
  }  
    
  function* commentSaga() {
    yield takeLatest('FETCH_COMMENT', fetchComment);
  }
    
    export default commentSaga;