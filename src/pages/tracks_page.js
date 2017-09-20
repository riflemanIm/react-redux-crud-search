import React, { Component } from "react";
import { connect } from "react-redux";
import { getTracks } from "../actions/tracks";
import Task from "../components/Task";
import { Grid, Input, Button } from "semantic-ui-react";

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
    this.props.onFindTrack(this.inputserch.inputRef.value);
  };
  addTack = () => {
    if (this.inputtext.inputRef.value.trim())
      this.props.onAddTrack(this.inputtext.inputRef.value);
    this.inputtext.inputRef.value = "";
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
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Input
              type="text"
              icon="search"
              placeholder="serch"
              onKeyUp={this.findTrack}
              ref={input => {
                this.inputserch = input;
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <Input
              type="text"
              placeholder="write..."
              ref={input => {
                this.inputtext = input;
              }}
              action
            >
              <input />
              <Button onClick={this.addTack} color="teal">
                Add
              </Button>
            </Input>
            {/* {this.props.tracks.map((track, index) => (
            <li key={index} onClick={this.editTrack}>
              {track.name}
            </li>
          ))} */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{this.props.tracks.map(this.eachTask)}</Grid.Column>
        </Grid.Row>
      </Grid>
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
    dispatch({ type: "FIND_TRACK", payload: name });
  },
  onGetTracks: () => {
    dispatch(getTracks());
  }
}))(Tracks);
