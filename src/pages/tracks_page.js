import React, { Component } from "react";
import { connect } from "react-redux";
import { getTracks } from "../actions/tracks";
import Task from "../components/Task";
import { Input, Button } from "semantic-ui-react";

//const Tracks = ({ tracks, onAddTrack, onFindTrack, onGetTracks }) => {
class Tracks extends Component {
  constructor(props) {
    super(props);
    this.inx = null;
  }

  componentDidMount() {
    this.props.onGetTracks();
  }

  findTrack = () => {
    console.log("findTrack", this.formInput.value);
    this.props.onFindTrack(this.formInput.value);
  };

  addTack = () => {
    if (this.formInput.value.trim())
      this.props.onAddTrack(this.formInput.value);
    this.formInput.value = "";
  };

  eachTask = (item, i) => {
    return (
      <Task
        key={i}
        item={item}
        onSaveTrack={this.props.onSaveTrack}
        onDeleteTrack={this.props.onDeleteTrack}
      >
        {item.name}
      </Task>
    );
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="serch/add"
            onKeyUp={this.findTrack}
            ref={input => {
              this.formInput = input;
            }}
          />
          <Button onClick={this.findTrack}>Find track</Button>
          &nbsp;
          <Button onClick={this.addTack}>addTrack</Button>
        </div>

        {this.props.tracks.map(this.eachTask)}
        {/* {this.props.tracks.map((track, index) => (
            <li key={index} onClick={this.editTrack}>
              {track.name}
            </li>
          ))} */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks)
    )
  };
}
export default connect(mapStateToProps, dispatch => ({
  onAddTrack: name => {
    dispatch({
      type: "ADD_TRACK",
      payload: {
        id: Date.now().toString(),
        name
      }
    });
  },
  onSaveTrack: item => {
    dispatch({
      type: "SAVE_TRACK",
      payload: item
    });
  },
  onDeleteTrack: id => {
    dispatch({
      type: "DELETE_TRACK",
      payload: id
    });
  },
  onFindTrack: name => {
    console.log("name", name);
    dispatch({ type: "FIND_TRACK", payload: name });
  },
  onGetTracks: () => {
    dispatch(getTracks());
  }
}))(Tracks);
