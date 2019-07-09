import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "react-materialize";
import axios from "axios";

import Header from "./components/Header";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import EditFriend from "./components/EditFriend";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friendData: res.data }))
      .catch(err => console.log(err));
  }

  updateFriends = friendData => {
    this.setState({ friendData });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Route
            exact
            path="/"
            render={props => (
              <FriendList
                {...props}
                friends={this.state.friendData}
                updateFriends={this.updateFriends}
              />
            )}
          />
          <Route
            exact
            path="/friend/add"
            render={props => (
              <AddFriend {...props} updateFriends={this.updateFriends} />
            )}
          />
          <Route
            path="/friend/edit/:id"
            exact
            render={props => (
              <EditFriend
                {...props}
                friends={this.state.friendData}
                updateFriends={this.updateFriends}
              />
            )}
          />
        </Container>
      </div>
    );
  }
}

export default App;
