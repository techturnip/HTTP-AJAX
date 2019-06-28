import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import axios from "axios";

export default class EditFriend extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    errMsg: null
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const friend = this.props.friends.find(friend => friend.id === Number(id));
    console.log(friend);
    console.log(this.props.friends);

    if (friend) {
      this.setState({
        name: friend.name,
        age: friend.age,
        email: friend.email
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editFriend = e => {
    e.preventDefault();

    const id = this.props.match.params.id;

    const { name, age, email } = this.state;
    const payload = {
      name,
      age,
      email
    };

    axios
      .put(`http://localhost:5000/friends/${id}`, payload)
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
    const { name, age, email } = this.state;
    return (
      <div>
        <h3>Edit Friend</h3>
        <Card>
          <form onSubmit={this.editFriend}>
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={age}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <Button type="submit" waves="light">
              Submit <Icon right>send</Icon>
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
