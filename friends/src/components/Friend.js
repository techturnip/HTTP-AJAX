import React, { Component } from "react";
import { Row, Col, Card } from "react-materialize";

export default class Friend extends Component {
  render() {
    const { name, age, email } = this.props.friend;

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
            <a className="teal-text" href="#">
              <i className="small material-icons">edit</i>
            </a>
            <a className="red-text text-lighten-2" href="#">
              <i className="small material-icons">delete</i>
            </a>
          </div>
        </div>
      </Card>
    );
  }
}
