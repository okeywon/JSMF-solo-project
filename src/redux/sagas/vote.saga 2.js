import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchVote(action) {
    try {
        const res = yield axios.get(`/api/vote/${action.payload}`);
        yield put({ type: 'SET_VOTE', payload: res.data });
    } catch (err) {
        console.log('Comment get request failed in saga', err);
        return;
    }
}  
    
function* addVote(action) {
    console.log("Adding a Vote, reached detail.saga", action);
    try {
        yield axios.post(`/api/vote/${action.payload.appID}`, action.payload);
        yield put({type: 'FETCH_DETAIL', payload: action.payload.appID});
    }
    catch (err) {
        console.log('Error in detail saga in addVote', err);
        return;
    }
}

function* voteSaga() {
    yield takeLatest('FETCH_VOTE', fetchVote);
    yield takeLatest('ADD_VOTE', addVote);
}
    
export default voteSaga;