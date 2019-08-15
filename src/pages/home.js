import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toDetail() {
    this.props.history.push('detail');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.toDetail()}>去detail</button>
      </div>
    );
  }
}
