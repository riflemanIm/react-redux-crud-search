const initialState = [];

export default (state = initialState, action) => {
  if (action.type === "ADD_TRACK") return [...state, action.payload];
  if (action.type === "SAVE_TRACK") {
    return [
      action.payload,
      ...state.filter(item => item.id !== action.payload.id)
    ];
  }
  if (action.type === "DELETE_TRACK") {
    return [...state.filter(item => item.id !== action.payload)];
  }

  if (action.type === "FETCH_TRACKS_SUCCESS") return action.payload;
  //if (action.type === "REF_TRACKS") return action.payload;
  return state;
};
