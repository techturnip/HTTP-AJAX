import React, { Component } from "react";
import { Navbar, NavItem, Container } from "react-materialize";

export default class Header extends Component {
  render() {
    return (
      <Navbar brand={<a href="#">Friends App</a>} centerLogo alignLinks="right">
        <NavItem>Getting started</NavItem>
        <NavItem href="components.html">Components</NavItem>
      </Navbar>
    );
  }
}
