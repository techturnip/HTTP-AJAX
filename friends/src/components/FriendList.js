import React, { Component } from "react";
import Friend from "./Friend";

export default class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <div>
        <h3>My Friends</h3>
        {friends.map(friend => (
          <Friend
            {...this.props}
            key={friend.id}
            friend={friend}
            updateFriends={this.props.updateFriends}
          />
        ))}
      </div>
    );
  }
}
