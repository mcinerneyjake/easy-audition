const auditionDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AUDITION_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default auditionDetailsReducer;
