import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchClassifieds() {
  try {
    const classifieds = yield axios.get('/api/classifieds');
    yield put({
      type: 'SET_CLASSIFIEDS',
      payload: classifieds.data,
    });
  } catch {
    console.log('GET classifeds error.');
  }
}

function* fetchClassifiedsSaga() {
  yield takeLatest('FETCH_CLASSIFIEDS', fetchClassifieds);
}

export default fetchClassifiedsSaga;