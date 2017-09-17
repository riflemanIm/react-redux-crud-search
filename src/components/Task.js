import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  edit = () => {
    console.log("edit");
    this.setState({
      edit: true
    });
  };

  save = () => {
    //console.log(this.props.item);
    //return;
    this.props.onSaveTrack({
      id: this.props.item.id,
      name: this.textarea.value
    });
    this.setState({
      edit: false
    });
  };

  remove = () => {
    this.props.onDeleteTrack(this.props.item.id);
  };

  viewNorm() {
    return (
      <div className="box">
        <div className="elem_row">
          <div className="text">{this.props.children}</div>
        </div>
        <div className="elem_row">
          <button onClick={this.edit} className="btn ligth">
            edit
          </button>
        </div>
        <div className="elem_row">
          <button onClick={this.remove} className="btn red">
            delete
          </button>
        </div>
      </div>
    );
  }

  viewEdit() {
    return (
      <div className="box">
        <div className="elem_row">
          <textarea
            ref={text => {
              this.textarea = text;
            }}
            defaultValue={this.props.children}
          />
        </div>
        <div className="elem_row">
          <button onClick={this.save} className="btn ok">
            save
          </button>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.edit) return this.viewEdit();
    return this.viewNorm();
  }
}

export default Task;
