import React, { Component } from "react";
import { Row, Col, Card } from "react-materialize";

export default class Friend extends Component {
  render() {
    const { name, age, email } = this.props.friend;

    return (
      <Card>
        <div className="flex">
          <div>
            <h5>{name}</h5>
          </div>
          <div>
            <p className="flow-text">Age: {age}</p>
            <p className="flow-text">Email: {email}</p>
          </div>

          <div className="interaction">
            <i className="small material-icons">edit</i>
            <i className="small material-icons">delete</i>
          </div>
        </div>
      </Card>
    );
  }
}
