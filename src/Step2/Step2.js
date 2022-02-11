import React, { useState, useEffect } from "react";
import { StepTwoMethod } from "../Redux/Step2";
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
import { useDispatch, useSelector } from "react-redux";
import { VscPassFilled } from "react-icons/vsc";
import { GetAllContent } from "../Redux/content";

export default function Step2() {
  const dispatch = useDispatch();
  const [Fanswer, setFanswer] = useState("");
  const [Sanswer, setSanswer] = useState("");
  const [company, setCompany] = useState("");

  const firstStep = useSelector((state) => state.StepOneReducer);
  const SecondStep = useSelector((state) => state.StepTwoMethod);

  const Answers = [];

  const isYes = () => {
    if (Fanswer === "Yes") {
      return true;
    }
    return false;
  };
  const hundleFinished = () => {
    if (Fanswer !== "" && Sanswer !== "") {
      dispatch(StepTwoMethod(true));
      Answers.push(Fanswer);
      Answers.push(Sanswer);
      if (company !== "") {
        Answers.push(company);
      }
      return true;
    } else return false;
  };

  useEffect(() => {
    if (SecondStep === true) {
      dispatch(GetAllContent(Answers));
    }
  }, [SecondStep]);

  return (
    <>
      <Grid container lg={12}>
        <Typography className="header" variant="h5">
          Would you like your company name on your badges?
        </Typography>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              disabled={!firstStep}
              onChange={(e) => {
                setFanswer(e.target.value);
              }}
              value="Yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              disabled={!firstStep}
              onChange={(e) => {
                setFanswer(e.target.value);
              }}
              value="No"
              control={<Radio color="primary" />}
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
                          <input
                            onChange={(e) => {
                              setCompany(e.target.value);
                            }}
                            required
                            type="text"
                          />
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
              disabled={!firstStep}
              onChange={(e) => {
                setSanswer(e.target.value);
              }}
              value="Yes"
              control={<Radio color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              disabled={!firstStep}
              onChange={(e) => {
                setSanswer(e.target.value);
              }}
              value="No"
              control={<Radio color="primary" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <List>
          <TransitionGroup>
            {hundleFinished() ? (
              <Collapse in={true}>
                <ListItem>
                  <VscPassFilled className="correct-icon" />
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
