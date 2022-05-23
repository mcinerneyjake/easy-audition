const auditionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AUDITIONS':
      return action.payload;
    default:
      return state;
  }
};

export default auditionsReducer;
