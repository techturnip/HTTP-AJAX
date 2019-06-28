import React, { Component } from "react";
import { Card, Button, Icon } from "react-materialize";
import axios from "axios";

export default class Form extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    errMsg: null
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;

      // axios
      //   .get(`http://localhost:5000/friends/${}`)
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    const payload = {
      name,
      age,
      email
    };

    // Check whether adding friend or editing friend
    if (this.props.addFriend) {
      this.props.addFriend(payload);
    } else if (this.props.editFriend) {
      this.props.editFriend(payload);
    }
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <Card>
        <form onSubmit={this.submitHandler}>
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
    );
  }
}
