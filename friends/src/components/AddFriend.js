import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";

export default class AddFriend extends Component {
  addFriend = payload => {
    console.log(payload);

    axios
      .post("http://localhost:5000/friends", payload)
      .then(res => {
        this.props.updateFriends(res.data);

        this.setState({
          errMsg: null
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h3>Add Friend</h3>
        <Form
          {...this.props}
          updateFriends={this.props.updateFriends}
          addFriend={this.addFriend}
        />
      </div>
    );
  }
}
