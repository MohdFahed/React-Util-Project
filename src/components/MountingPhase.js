import React, { Component, useState } from "react";

export default class MountingPhase extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor Executed..");
    this.state = {
      name: "Fahed",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStateFromProps Executed..");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount Executed..");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate Executed..");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate Executed..");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Executed..");
  }
  handleState = () => {
    console.log("Clicl..");
    this.setState({
      name: "Rahman",
    });
  };
  render() {
    console.log("render Executed..");
    return (
      <>
        <div>Name: {this.state.name}</div>
        <button onClick={this.handleState}>Click</button>
      </>
    );
  }
}
