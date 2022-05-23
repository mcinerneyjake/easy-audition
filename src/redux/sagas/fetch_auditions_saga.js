import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAuditions() {
  try {
    const auditions = yield axios.get('/api/auditions');
    console.log('GET auditions', auditions.data);
    yield put({
      type: 'SET_AUDITIONS',
      payload: auditions.data,
    });
  } catch {
    console.log('GET auditions error.');
  }
}

function* fetchAuditionsSaga() {
  yield takeLatest('FETCH_AUDITIONS', fetchAuditions);
}

export default fetchAuditionsSaga;
