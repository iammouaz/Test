import React, { useState } from "react";
import { FormControl, Typography, Grid } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function Step3() {
  const [ready, setReady] = useState(true);
  const Content = useSelector((state) => state.ContentReducer);
  const SecondStep = useSelector((state) => state.StepTwoMethod);

  const submitForm = () => {
    console.log(Content);
  };

  return (
    <Grid container lg={12}>
      <FormControl>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography className="header" variant="h5">
              Are you ready to rock ?
            </Typography>
            <Checkbox
              disabled={!SecondStep}
              onChange={(e) => {
                setReady(!ready);
              }}
            />
          </Stack>
          <button
            onClick={() => {
              submitForm();
            }}
            disabled={ready}
          >
            Complete Registration
          </button>
        </Stack>
      </FormControl>
    </Grid>
  );
}
