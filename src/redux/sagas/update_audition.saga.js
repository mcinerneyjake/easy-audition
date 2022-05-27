import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateAudition(action) {
  try {
    const auditionToEdit = action.payload;
    console.log('auditionToEdit in updateAudition', auditionToEdit);
    const response = yield axios({
      method: 'PUT',
      url: `/api/auditions/${auditionToEdit.id}`,
      data: {
        theatre: auditionToEdit.theatre,
        location: auditionToEdit.location,
        show: auditionToEdit.show,
        date: auditionToEdit.date,
        director: auditionToEdit.director,
        musicDirector: auditionToEdit.music_director,
        choreographer: auditionToEdit.choreographer,
        castingDirector: auditionToEdit.casting_director,
        pianist: auditionToEdit.pianist,
        monitor: auditionToEdit.monitor,
        materialsUsed: auditionToEdit.materials_used,
        auditionComplete: auditionToEdit.audition_complete,
        callback: auditionToEdit.callback,
        booked: auditionToEdit.booked,
        notes: auditionToEdit.notes,
      },
    });
    yield put({
      type: 'FETCH_AUDITION_DETAILS',
      payload: auditionToEdit.id
    });
  } catch (err) {
    console.log(err);
  }
}

function* updateAuditionSaga() {
  yield takeLatest('UPDATE_AUDITION', updateAudition);
}

export default updateAuditionSaga;
