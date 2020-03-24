import React, { Component } from "react";
import BListInsert from "./BListInsert";
import BList from "./BList";

const BUCKET_MAIN_URL = "http://localhost:5000/bucket";
// const BUCKET_INSERT_URL = "http://localhost:5000/bucket/insert";

class BListMain extends Component {
  timer = "";
  state = {
    isFetch: false,
    bList: []
  };

  componentDidMount() {
    this.fetchBList();
    this.timer = setInterval(() => this.fetchBList(), 5000);
  }

  componentWillMount() {
    this.timer = null;
  }

  // 서버에서 리스트 조회
  fetchBList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BUCKET_MAIN_URL)
      .then(Response => {
        return Response.json();
      })
      .then(result => {
        this.setState({
          bList: result,
          isFetch: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { bList } = this.state;
    return (
      <div className="w3-container">
        <header className="w3-green w3-padding-32 w3-center">
          <h2>My Bucket List</h2>
        </header>
        <section className="w3-container">
          <BListInsert bucket_insert_url={BUCKET_MAIN_URL} />
          <BList bList={bList} bucket_main_url={BUCKET_MAIN_URL} />
        </section>
      </div>
    );
  }
}

export default BListMain;
