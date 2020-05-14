import React, { Component } from "react";
import axios from "axios";

export default class API extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      this.setState({
        posts: response.data,
      });
    });
  }

  render() {
    return <div>{this.state}</div>;
  }
}
