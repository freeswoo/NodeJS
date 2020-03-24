import React, { Component } from "react";

class BListItem extends Component {
  state = {
    isEditing: false,
    b_title: ""
  };

  inputClick = ev => {
    ev.stopPropagation();
  };

  toggleEdit = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  editInput = ev => {
    this.setState({
      ...this.state,
      b_title: ev.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { bucket } = this.props;
    if (!prevState.isEditing && this.state.isEditing) {
      this.setState({
        b_title: bucket.b_title
      });
    }
  }

  updateHandle = () => {
    const { bucket, bucket_main_url } = this.props;
    const data = { _id: bucket._id, b_title: this.state.b_title };

    fetch(bucket_main_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  deleteHandle = ev => {
    if (window.confirm("데이터를 삭제할까요?")) {
      const { bucket, bucket_main_url } = this.props;
      const data = { _id: bucket._id };
      fetch(bucket_main_url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
    ev.stopPropagation();
  };

  render() {
    const { bucket } = this.props;
    return (
      <tr data-id={bucket._id} onClick={this.toggleEdit}>
        <td>
          {this.state.isEditing ? (
            <div>
              <input
                value={this.state.b_title}
                onClick={this.inputClick}
                onChange={this.editInput}
              />
              <button type="button" onClick={this.updateHandle}>
                완료
              </button>
            </div>
          ) : (
            <span>{bucket.b_title}</span>
          )}
        </td>
        <td>
          <button type="button" onClick={this.deleteHandle}>
            삭제
          </button>
        </td>
      </tr>
    );
  }
}

export default BListItem;
