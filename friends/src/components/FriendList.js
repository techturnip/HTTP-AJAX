import React, { Component } from "react";
import Friend from "./Friend";

export default class FriendList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h3>My Friends</h3>
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
