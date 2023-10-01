import React, { Component } from "react";
import { Preloader } from "./Preloader";

class Comp extends Component {
  state = {
    posts: [],
    loading: true,
    comments: [],

  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data, loading: false }));

    this.timer = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => this.setState({ comments: data }));
    }, 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <>
      {this.state.loading ? <Preloader /> : <h3>{this.state.posts.length} was loaded</h3>}
    </>
  }
}

export default Comp;