import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAuditionDetails(action) {
  try {
    const audition = yield axios.get(`/api/auditions/${action.payload}`);
    console.log('GET audition details', audition.data);
    yield put({
      type: 'SET_AUDITION_DETAILS',
      payload: audition.data,
    });
  } catch {
    console.log('GET audition details error.');
  }
}

function* fetchAuditionDetailsSaga() {
  yield takeLatest('FETCH_AUDITION_DETAILS', fetchAuditionDetails);
}

export default fetchAuditionDetailsSaga;
