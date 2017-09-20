import { combineReducers } from "redux";

import tracks from "./tracks";
import filterTracks from "./filterTracks";

export default combineReducers({
  tracks,
  filterTracks
});
