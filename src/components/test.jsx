import React, { Component } from 'react';

export default class Test extends Component {
  state = {
    count: 1,
  };
  componentDidMount() {
    setInterval(() => this.setState({ count: 10 }), 100);
  }
  render() {
    return (
      <h1>
        {this.state.count} - {this.state.count}
      </h1>
    );
  }
}
