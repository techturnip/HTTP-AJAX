import React, { Component } from "react";
import Form from "./Form";

export default class AddFriend extends Component {
  render() {
    return (
      <div>
        <h3>Add Friend</h3>
        <Form {...this.props} updateFriends={this.props.updateFriends} />
      </div>
    );
  }
}
