//import axios from "axios";

let tracksData = [
  { id: 1, name: "Pure Morning" },
  { id: 2, name: "Californication" },
  { id: 3, name: "Unforgiven" },
  { id: 4, name: "Don't cry to night" }
];

export function getTracks() {
  return {
    type: "FETCH_TRACKS_SUCCESS",
    payload: tracksData
  };
}
