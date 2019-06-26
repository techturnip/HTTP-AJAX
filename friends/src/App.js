import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import { Container } from "react-materialize";
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

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <FriendList friends={this.state.friendData} />
        </Container>
      </div>
    );
  }
}

export default App;
