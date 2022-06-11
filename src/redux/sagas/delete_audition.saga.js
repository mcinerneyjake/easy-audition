import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteAudition(action) {
  try {
    const audition = yield axios.delete(`/api/auditions/${action.payload}`);
    yield put({
      type: 'FETCH_AUDITIONS',
    });
  } catch {
    console.log('DELETE audition error.');
  }
}

function* deleteAuditionSaga() {
  yield takeLatest('DELETE_AUDITION', deleteAudition);
}

export default deleteAuditionSaga;
