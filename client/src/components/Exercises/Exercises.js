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
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];

      return exercises;
    }, {});
  }

  render() {
    console.log("Grouped exercises: ", this.getExercisesByMuscles());
    return (
      <StyledExercises className="section">
        <ExercisesChild muscles={muscles} />
      </StyledExercises>
    );
  }
}

const StyledExercises = styled.div``;

export default Exercises;
