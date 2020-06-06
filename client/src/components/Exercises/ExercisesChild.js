import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { exercises, muscles } from "./data-exercises";

class ExercisesChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  activeCategoryIndex = (e, index) => {
    this.setState({
      value: index,
    });
  };

  getExerciseItems = () => {
    const { value } = this.state; // grab the state.val of 0
    if (value === 0) {
      return (
        <List>
          {exercises.map((exercise) => {
            return <ListItem> {exercise.title} </ListItem>;
          })}
        </List>
      );
      // else filter through exercises and return exercises where exer.muscles == muscles val
    } else {
      const filteredExerciseItems = exercises.filter((exercise) => {
        return exercise.muscles === muscles[value - 1];
      });

      return (
        <List>
          {filteredExerciseItems.map((exercise) => {
            return <ListItem> {exercise.title} </ListItem>;
          })}
        </List>
      );
    }
  };

  render() {
    const { muscles, exercises } = this.props;
    return (
      <StyledExercisesChild className="section">
        <Grid container>
          <Grid item sm>
            <Paper>
              <List>
                {muscles.map((group) => {
                  const exercisesWithGroup = exercises.filter(
                    (exer) => exer.muscles === group
                  );

                  return (
                    <div>
                      <ListItem>
                        <Typography variant="h6">{group}</Typography>{" "}
                      </ListItem>
                      <List>
                        {exercisesWithGroup.map((exerItem) => (
                          <ListItem>
                            <Typography variant="overline">
                              {exerItem.title}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  );
                })}
              </List>
            </Paper>
          </Grid>
          <Grid item sm>
            <Paper>Individual Object Details Here</Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm>
            <Paper>
              <Tabs
                value={this.state.value}
                onChange={this.activeCategoryIndex}
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="All"></Tab>
                {this.props.muscles.map((muscle, index) => (
                  <Tab id={"somevalue" + index} label={muscle}></Tab>
                ))}
              </Tabs>

              <div>{this.getExerciseItems()}</div>
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
