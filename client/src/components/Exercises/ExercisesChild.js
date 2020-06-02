import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class ExercisesChild extends Component {
  render() {
    return (
      <StyledExercisesChild className="section">
        <Grid container>
          <Grid item sm>
            <Paper>exercises child LEFT</Paper>
          </Grid>
          <Grid item sm>
            <Paper>exercises child RIGHT</Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm>
            <Paper>
              <Tabs
                value={0}
                // onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="All"></Tab>
                {this.props.muscles.map((muscle) => (
                  <Tab label={muscle}></Tab>
                ))}
              </Tabs>
            </Paper>
          </Grid>
        </Grid>
      </StyledExercisesChild>
    );
  }
}

const StyledExercisesChild = styled.div`
  .MuiGrid-item {
    padding: 15px;
  }
  .MuiPaper-root {
    padding: 15px;
  }
`;

export default ExercisesChild;
