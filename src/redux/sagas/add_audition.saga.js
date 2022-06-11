import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addAudition(action) {
  try {
    const newAudition = yield axios({
      method: 'POST',
      url: '/api/auditions',
      data: action.payload,
    });
    yield put({
      type: 'FETCH_AUDITIONS',
    });
  } catch {
    console.log('POST newAudition error.');
  }
}

function* addAuditionSaga() {
  yield takeLatest('ADD_AUDITION', addAudition);
}

export default addAuditionSaga;
