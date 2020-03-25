import React, { Component } from "react";
import axios from "axios";

class BListInsert extends Component {
  state = {
    b_title: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, b_title: e.target.value });
  };

  bListAxiosSubmit = ev => {
    ev.preventDefault();
    const { bList_insert_url } = this.props;
    axios
      .post(bList_insert_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  bListInsertSubmit = ev => {
    ev.preventDefault();
    const { bucket_insert_url } = this.props;

    // console.log("전송", this.state.b_title);
    // console.log(bucket_insert_url);
    fetch(bucket_insert_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        b_title: this.state.b_title
      })
    })
      .then(response => response.json())
      .catch(e => console.log(e));
  };

  render() {
    return (
      <form
        onSubmit={this.bListInsertSubmit}
        className="w3-container w3-row-padding"
      >
        <div className="w3-col s9 w3-padding">
          <input
            value={this.state.b_title}
            onChange={this.handleChange}
            className="w3-input w3-border"
          />
        </div>
        <div className="w3-col s3 w3-padding">
          <button type="submit" className="w3-button w3-blue">
            저장
          </button>
        </div>
      </form>
    );
  }
}

export default BListInsert;
