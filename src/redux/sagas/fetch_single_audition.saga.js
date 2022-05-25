import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchSingleAudition() {
  try {
    const auditions = yield axios.get('/api/auditions/single-audition');
    console.log('GET single audition', auditions.data);
    yield put({
      type: 'SET_SINGLE_AUDITION',
      payload: auditions.data,
    });
  } catch {
    console.log('GET single audition error.');
  }
}

function* fetchSingleAuditionSaga() {
  yield takeLatest('FETCH_CLOSEST_UPCOMING_AUDITION', fetchSingleAudition);
}

export default fetchSingleAuditionSaga;
