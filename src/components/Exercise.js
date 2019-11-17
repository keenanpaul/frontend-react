import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Exercise extends Component {
  render() {
    console.log("props", this.props);
    return (
      <tr>
        <td>{this.props.exercise.username}</td>
        <td>{this.props.exercise.description}</td>
        <td>{this.props.exercise.duration}</td>
        <td>{this.props.exercise.date}</td>
        <td>
          <div>{this.props.exercise._id}</div>
          <Link to={`/edit/${this.props.exercise._id}`}>Edit</Link> |
          <button onClick={() => this.props.delete(this.props.exercise._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
