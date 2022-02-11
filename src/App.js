import Selects from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { Grid, Typography, Box, Card } from "@material-ui/core";
import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const firstStep = useSelector((state) => state.StepOneReducer);
  const SecondStep = useSelector((state) => state.StepTwoMethod);

  return (
    <>
      <Box sx={{ p: "2%", maxWidth: "45 %" }}>
        <Grid container>
          <Grid style={{ paddingBottom: "3%" }} item lg={12}>
            <Typography
              style={{ color: "white" }}
              className="header"
              variant="h2"
            >
              Seminar <span className="header-color">Registration</span>
            </Typography>
          </Grid>
          <Grid container alignItems="flex-start">
            <Grid item container lg={4}>
              <Card className="steps">
                <Typography className="step-text">Step 1</Typography>
              </Card>
              <Card className="card-one">
                <Typography className="header" variant="h5">
                  How many people will be attending?
                </Typography>
                <Selects />
              </Card>
            </Grid>
            <Grid
              style={{
                opacity: firstStep ? "1" : "0.5",
                userSelect: firstStep ? "auto" : "none",
              }}
              item
              container
              lg={4}
              sm={12}
            >
              <Card className="steps">
                <Typography className="step-text">Step 2</Typography>
              </Card>
              <Card className="card-two">
                <Step2 />
              </Card>
            </Grid>
            <Grid
              style={{
                opacity: SecondStep ? "1" : "0.5",
                userSelect: SecondStep ? "auto" : "none",
              }}
              item
              container
              lg={4}
              sm={12}
            >
              <Card className="steps">
                <Typography className="step-text">Step 3</Typography>
              </Card>
              <Card className="card-three">
                <Step3 />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
