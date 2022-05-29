const auditionDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ANALYTICS':
      return action.payload;
    default:
      return state;
  }
};

export default auditionDataReducer;
