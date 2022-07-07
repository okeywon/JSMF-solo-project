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

function* addApp(action) {
  try {
    yield axios.post('/api/admin', action.payload);
  }
  catch (err) {
      console.log('Error in POST saga', err);
      return;
  }
  yield put({type: 'FETCH_ADMIN'});
}
  
function* adminSaga() {
  yield takeLatest('FETCH_ADMIN', fetchAdmin);
  yield takeLatest('ADD_APP', addApp);
}
  
  export default adminSaga;
  