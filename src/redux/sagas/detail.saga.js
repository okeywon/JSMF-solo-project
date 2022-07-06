import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDetail(action) {
    try {
      const res = yield axios.get(`/api/admin/${action.payload}`);
      yield put({ type: 'SET_DETAIL', payload: res.data });
    } catch (err) {
      console.log('Admin list get request failed', err);
      return;
    }
  }  
    
  function* detailSaga() {
    yield takeLatest('FETCH_DETAIL', fetchDetail);
  }
    
    export default detailSaga;