import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchAuditionsSaga from './fetch_auditions_saga';
import addAuditionSaga from './add_audition.saga';
import fetchAuditionDetailsSaga from './fetch_audition_details';
import deleteAuditionSaga from './delete_audition.saga';
import fetchSingleAuditionSaga from './fetch_single_audition.saga';
import fetchAuditionToUpdateSaga from './fetch_audition_to_update.saga';
import updateAuditionSaga from './update_audition.saga';
import fetchAnalyticsSaga from './fetch_analytics.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchAuditionsSaga(),
    addAuditionSaga(),
    fetchAuditionDetailsSaga(),
    deleteAuditionSaga(),
    fetchSingleAuditionSaga(),
    fetchAuditionToUpdateSaga(),
    updateAuditionSaga(),
    fetchAnalyticsSaga(),
  ]);
}
