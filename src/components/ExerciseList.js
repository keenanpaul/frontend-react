import React, { Component } from "react";
import axios from "axios";
import Exercise from "./Exercise";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then(response => {
        this.setState({ exercises: response.data }, () => {
          console.log("Exercises retrieved");
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise = id => {
    axios
      .delete(`http://localhost:5000/exercises/delete/${id}`)
      .then(response => {
        console.log("Exercise deleted", response);
        this.setState({
          exercises: this.state.exercises.filter(
            exercise => exercise._id !== id
          )
        });
      })
      .catch(error => {
        console.log("Error in deleting: ", error);
      });
  };

  exerciseList = () => {
    console.log("exerciseList", this.state.exercises);
    return this.state.exercises.map(exercise => {
      console.log("exercise", exercise);
      return (
        <Exercise
          exercise={exercise}
          key={exercise._id}
          delete={this.deleteExercise}
        />
      );
    });
  };

  render() {
    console.log("1234");
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
