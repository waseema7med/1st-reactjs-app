import React, { Component } from "react";

export class Details extends Component {
  render() {
    return (
      <h1>
        <span> Welcome mr {this.props.name} </span>
        <span>you're {this.props.age} years old </span>
      </h1>
    );
  }
}
