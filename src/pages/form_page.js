import React from "react";
import { connect } from "react-redux";
//import { getTracks } from "../actions/tracks";

const List = ({ tracks }) => {
  return (
    <div>
      <ul>{tracks.map((track, i) => <li key={i}>{track.name}</li>)}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}
export default connect(mapStateToProps)(List);
