import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);
    this.refsInput = React.createRef();
  }

  componentDidMount() {
    this.refsInput.current.focus();
  }
  handleSubmit = () => {
    console.log("Clicked..");
    console.log(this.refsInput.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.refsInput} />
        <button onClick={this.handleSubmit}>Click</button>
      </div>
    );
  }
}
export default Refs;
