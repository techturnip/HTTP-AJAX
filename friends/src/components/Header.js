import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-materialize";

export default class Header extends Component {
  render() {
    return (
      <Navbar
        brand={<NavLink to="/">Friends App</NavLink>}
        centerLogo
        alignLinks="right"
      >
        <NavLink to="/friend/add">+ Add Friend</NavLink>
      </Navbar>
    );
  }
}
