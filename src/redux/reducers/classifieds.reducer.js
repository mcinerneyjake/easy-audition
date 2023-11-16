const classifiedsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLASSIFIEDS':
      return action.payload;
    default:
      return state;
  }
};

export default classifiedsReducer;
