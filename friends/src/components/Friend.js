import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-materialize";
import axios from "axios";

export default class Friend extends Component {
  deleteFriend = () => {
    const { id } = this.props.friend;

    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.props.updateFriends(res.data))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.friend);

    const { name, age, email, id } = this.props.friend;

    return (
      <Card className="hoverable">
        <div className="flex">
          <div>
            <h5>{name}</h5>
          </div>
          <div>
            <p className="flow-text">Age: {age}</p>
            <p className="flow-text">Email: {email}</p>
          </div>

          <div className="interaction">
            <Link to={`/friend/edit/${id}`} className="teal-text" href="#">
              <i className="small material-icons">edit</i>
            </Link>
            <a
              onClick={this.deleteFriend}
              className="red-text text-lighten-2 interaction-link"
            >
              <i className="small material-icons">delete</i>
            </a>
          </div>
        </div>
      </Card>
    );
  }
}
