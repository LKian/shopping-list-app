import React, { Component } from "react";
import styled from "styled-components";
import ExercisesChild from "./ExercisesChild";
import { muscles, exercises } from "./data-exercises";

class Exercises extends Component {
  state = {
    exercises,
  };

  getExercisesByMuscles() {
    return this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] == null
        ? (exercises[muscles] = [exercise])
        : exercises[muscles].push([exercise]);

      return exercises;
    }, {});
  }

  render() {
    this.getExercisesByMuscles();
    return (
      <StyledExercises className="section">
        <ExercisesChild muscles={muscles} exercises={exercises} />
      </StyledExercises>
    );
  }
}

const StyledExercises = styled.div``;

export default Exercises;
