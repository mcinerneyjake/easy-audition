const editAuditionReducer = (state = {}, action) => {
  if (action.type === 'SET_EDIT_AUDITION') {
    return action.payload;
  } else if (action.type === 'EDIT_THEATRE') {
    return {
      ...state,
      theatre: action.payload,
    };
  } else if (action.type === 'EDIT_LOCATION') {
    return {
      ...state,
      location: action.payload,
    };
  } else if (action.type === 'EDIT_SHOW') {
    return {
      ...state,
      show: action.payload,
    };
  } else if (action.type === 'EDIT_DATE') {
    return {
      ...state,
      date: action.payload,
    };
  } else if (action.type === 'EDIT_DIRECTOR') {
    return {
      ...state,
      director: action.payload,
    };
  } else if (action.type === 'EDIT_MUSIC_DIRECTOR') {
    return {
      ...state,
      music_director: action.payload,
    };
  } else if (action.type === 'EDIT_CHOREOGRAPHER') {
    return {
      ...state,
      choreographer: action.payload,
    };
  } else if (action.type === 'EDIT_CASTING_DIRECTOR') {
    return {
      ...state,
      casting_director: action.payload,
    };
  } else if (action.type === 'EDIT_PIANIST') {
    return {
      ...state,
      pianist: action.payload,
    };
  } else if (action.type === 'EDIT_MONITOR') {
    return {
      ...state,
      monitor: action.payload,
    };
  } else if (action.type === 'EDIT_MATERIALS_USED') {
    return {
      ...state,
      materials_used: action.payload,
    };
  } else if (action.type === 'EDIT_AUDITION_COMPLETE') {
    return {
      ...state,
      audition_complete: action.payload,
    };
  } else if (action.type === 'EDIT_CALLBACK') {
    return {
      ...state,
      callback: action.payload,
    };
  } else if (action.type === 'EDIT_BOOKED') {
    return {
      ...state,
      booked: action.payload,
    };
  } else if (action.type === 'EDIT_NOTES') {
    return {
      ...state,
      notes: action.payload,
    };
  }
  return state;
};

export default editAuditionReducer;
