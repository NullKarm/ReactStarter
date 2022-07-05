import React, { Component } from "react";
class Api extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
        });
      });
  }
  render() {
    const { data } = this.state;
    const result = data.map((e, index) => {
      return <li key={index}>{e}</li>;
    });
    return <ul>{result}</ul>;
  }
}

export default Api;
