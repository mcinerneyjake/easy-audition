import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAuditionToUpdate(action) {
  try {
    const auditionId = action.payload;
    const audition = yield axios.get(`/api/auditions/${auditionId}`);
    console.log('GET audition to update', audition.data[0]);
    yield put({
      type: 'SET_EDIT_AUDITION',
      payload: audition.data[0],
    });
  } catch {
    console.log('GET audition to update error.');
  }
}

function* fetchAuditionToUpdateSaga() {
  yield takeLatest('FETCH_AUDITION_TO_UPDATE', fetchAuditionToUpdate);
}

export default fetchAuditionToUpdateSaga;
