import React from "react";
import { FormControl, Typography, Grid } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";

export default function Step3() {
  const SecondStep = useSelector((state) => state.StepTwoMethod);

  return (
    <Grid container lg={12}>
      <FormControl>
        <Stack direction="row" spacing={2}>
          <Typography className="header" variant="h5">
            Are you ready to rock ?
          </Typography>
          <Checkbox />
        </Stack>
      </FormControl>
    </Grid>
  );
}
