import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import auditionsReducer from './auditions.reducer';
import auditionDetailsReducer from './auditionDetails.reducer';
import singleAuditionReducer from './singleAudition.reducer';
import editAuditionReducer from './editAudition.reducer';
import auditionDataReducer from './auditionDataReducer.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  auditionsReducer,
  auditionDetailsReducer,
  singleAuditionReducer,
  editAuditionReducer,
  auditionDataReducer,
});

export default rootReducer;
