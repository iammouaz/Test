import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  ListItemText,
  ListItem,
  List,
  Collapse,
  Grid,
} from "@material-ui/core";
import { TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";

export default function Step2() {
  const [Fanswer, setFanswer] = useState("");
  const [Sanswer, setSanswer] = useState("");

  const isYes = () => {
    if (Fanswer === "Yes") {
      return true;
    }
    return false;
  };

  const hundleFinished = () => {
    if (Fanswer !== "" && Sanswer !== "") {
      return true;
    } else return false;
  };

  return (
    <>
      <Grid container lg={12}>
        <Typography className="header" variant="h5">
          Would you like your company name on your badges?
        </Typography>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              onChange={(e) => {
                setFanswer(e.target.value);
              }}
              value="Yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              onChange={(e) => {
                setFanswer(e.target.value);
              }}
              value="No"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
          <Grid
            justifyContent="space-between"
            alignItems="center"
            lg={12}
            container
            item
          >
            <FormControl>
              <List>
                <TransitionGroup>
                  {isYes() ? (
                    <>
                      <Collapse in={true}>
                        <ListItem>
                          <ListItemText primary="Company Name:" />
                          <input required type="text" />
                        </ListItem>
                      </Collapse>
                    </>
                  ) : (
                    <></>
                  )}
                </TransitionGroup>
              </List>
            </FormControl>
          </Grid>
        </FormControl>

        <Typography className="header" variant="h5">
          Will anyone in your group require special accommodations?
        </Typography>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              onChange={(e) => {
                setSanswer(e.target.value);
              }}
              value="Yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              onChange={(e) => {
                setSanswer(e.target.value);
              }}
              value="No"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <List>
          <TransitionGroup>
            {hundleFinished() ? (
              <Collapse in={true}>
                <ListItem>
                  <CheckIcon className="correct-icon" />
                </ListItem>
              </Collapse>
            ) : (
              <></>
            )}
          </TransitionGroup>
        </List>
      </Grid>
    </>
  );
}
