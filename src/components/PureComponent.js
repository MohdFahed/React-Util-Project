import React from "react";

export default class PureComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("re-Rendering.....");
    return (
      <div>
        <h1>Cout: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count })}>
          Increment
        </button>
      </div>
    );
  }
}
