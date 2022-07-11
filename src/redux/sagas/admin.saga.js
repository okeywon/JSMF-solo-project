import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAdmin() {
    try {
      const res = yield axios.get('/api/admin');
      yield put({ type: 'SET_ADMIN', payload: res.data });
    } catch (err) {
      console.log('Admin list get request failed', err);
    }
  }

function* addApp(action) {
  console.log("Adding an application, it reached admin.saga", action)
  try {
    yield axios.post('/api/admin', action.payload);
  }
  catch (err) {
      console.log('Error in POST saga', err);
      return;
  }
  yield put({type: 'FETCH_ADMIN'});
}

function* addStatus(action) {
  console.log("Adding a Status, reached admin.saga", action)
  try {
    yield axios.put('/api/admin/'+ action.payload.applicationID, {status: action.payload.anything});
  }
  catch (err) {
      console.log('Error in POST saga', err);
      return;
  }
  yield put({type: 'FETCH_ADMIN'});
}

function* deleteApp(action) {
  try{
    const response = yield axios.delete(`/api/admin/${action.payload.id}`);
    console.log("this is the delete response", response);
  }
  catch(err) {
    console.log("Error in saga delete", err);
    return;
  }
  yield put({type: "FETCH_ADMIN"});
}
  
function* adminSaga() {
  yield takeLatest('FETCH_ADMIN', fetchAdmin);
  yield takeLatest('ADD_APP', addApp);
  yield takeLatest('ADD_STATUS', addStatus);
  yield takeLatest("DELETE_APP", deleteApp);
}
  
  export default adminSaga;
  