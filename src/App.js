import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Route exact path="/" component={ExerciseList} />
        <Route exact path="/edit/:id" component={EditExercise} />
        <Route exact path="/create" component={CreateExercise} />
        <Route exact path="/users" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
