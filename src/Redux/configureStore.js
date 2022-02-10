import { createStore, combineReducers } from "redux";
import StepOneReducer from "./Step1";
import StepTwoMethod from "./Step2";

const reducer = combineReducers({
  StepOneReducer,
  StepTwoMethod,
});

const store = createStore(reducer);
export default store;
