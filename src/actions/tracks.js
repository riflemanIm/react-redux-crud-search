let tracksData = [
  { id: 1, name: "Pure Morning" },
  { id: 2, name: "30 years" },
  { id: 3, name: "Unforgiven" },
  { id: 4, name: "Don't cry to night" }
];

export function getTracks() {
  return dispatch => {
    console.log("----- getTracks--------");
    dispatch({
      type: "FETCH_TRACKS_SUCCESS",
      payload: tracksData
    });
  };
}
