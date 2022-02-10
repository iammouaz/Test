import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import CheckIcon from "@mui/icons-material/Check";
import {
  Grid,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  FormControl,
} from "@material-ui/core";
import {
  StyledButton,
  StyledListbox,
  StyledPopper,
  StyledOption,
} from "./Selects.styled";
import { TransitionGroup } from "react-transition-group";
import { StepOneMethod } from "../Redux/Step1";

const CustomSelect = (props) => {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
};

CustomSelect.propTypes = {
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};

const renderValue = (option) => {
  if (option == null) {
    return <span>Please Choose</span>;
  }
  return <span>{option.label}</span>;
};

export default function Selects() {
  const dispatch = useDispatch();
  const numbers = [1, 2, 3, 4, 5];
  const [attendance, setAttendance] = useState([]);
  const [contentArr, setContentArr] = useState([]);
  const [finished, setFinished] = useState(false);
  const firstStep = useSelector((state) => state.StepOneReducer);


  const setContent = (value, index) => {
    const newArr = contentArr.map((item) => item);
    newArr[index] = value;
    setContentArr(newArr);
    CheckFinish();
  };

  const CheckFinish = () => {
    if (attendance.length === contentArr.length) {
      setFinished(true);
      dispatch(StepOneMethod(true));
    } else setFinished(false);
  };

  const renderFields = (e, value, index) => {
    return (
      <Collapse>
        <ListItem>
          <ListItemText primary={`Attendee ${e + 1} Name: `} />
          <input
            value={value}
            onChange={(e) => {
              setContent(e.currentTarget.value, index);
            }}
            required
            type="text"
          />
        </ListItem>
      </Collapse>
    );
  };

  const handleSelect = (option) => {
    const newNum = [];
    for (var i = 0; i < option; i++) {
      newNum.push(i);
    }
    return setAttendance(newNum);
  };

  return (
    <>
      <Grid container lg={12}>
        <Grid item lg={5}>
          <CustomSelect
            onChange={(e) => {
              handleSelect(e);
            }}
            renderValue={renderValue}
          >
            {numbers.map((e) => (
              <StyledOption value={e}>{e}</StyledOption>
            ))}
          </CustomSelect>
        </Grid>
      </Grid>
      <Grid
        justifyContent="space-between"
        alignItems="center"
        lg={12}
        container
        item
      >
        <Typography className="header" variant="p">
          Please provide full names:
        </Typography>
        <FormControl>
          <List>
            <TransitionGroup>
              {attendance?.map((item, index) =>
                renderFields(item, contentArr[index], index)
              )}
            </TransitionGroup>
          </List>
        </FormControl>
        {finished ? (
          <Grid lg={12} item container justifyContent="center">
            <TransitionGroup>
              <CheckIcon className="correct-icon" />
            </TransitionGroup>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
