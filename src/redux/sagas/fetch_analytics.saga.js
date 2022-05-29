import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAnalytics() {
  try {
    const analytics = yield axios.get('/api/chart');
    yield put({
      type: 'SET_ANALYTICS',
      payload: analytics.data,
    });
  } catch {
    console.log('GET analytics error.');
  }
}

function* fetchAnalyticsSaga() {
  yield takeLatest('FETCH_ANALYTICS_DATA', fetchAnalytics);
}

export default fetchAnalyticsSaga;
