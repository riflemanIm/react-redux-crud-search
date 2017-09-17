const initialState = ["Indi", "Classic Rock", "Pank"];

export default (state = initialState, action) => {
  if (action.type === "ADD_PLAYLIST") return [...state, action.payload];
  if (action.type === "DELETE_PLAYLIST") return state;

  return state;
};
