import { createStore, combineReducers } from "redux";
import StepOneReducer from "./Step1";
import StepTwoMethod from "./Step2";
import ContentReducer from "./content";
const reducer = combineReducers({
  StepOneReducer,
  StepTwoMethod,
  ContentReducer,
});

const store = createStore(reducer);
export default store;
