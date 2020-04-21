import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <h1>
        <span> your mobile number is {this.props.phone}</span>
        <span> and you're E-mail: {this.props.email} </span>
      </h1>
    );
  }
}
