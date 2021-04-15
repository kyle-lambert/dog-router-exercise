import React, { Component } from "react";

class DogDetails extends Component {
  render() {
    return <div>{this.props.dog.name}</div>;
  }
}

export default DogDetails;
