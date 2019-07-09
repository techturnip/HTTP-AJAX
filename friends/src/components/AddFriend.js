import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import axios from "axios";

export default class AddFriend extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    errMsg: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    e.preventDefault();

    const { name, age, email } = this.state;
    const payload = {
      name,
      age,
      email
    };

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
    const { name, age, email } = this.state;
    return (
      <div>
        <h3>Add Friend</h3>
        <Card>
          <form onSubmit={this.addFriend}>
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
