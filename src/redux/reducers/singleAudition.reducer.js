const singleAuditionReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SINGLE_AUDITION':
      return action.payload;
    default:
      return state;
  }
};

export default singleAuditionReducer;
