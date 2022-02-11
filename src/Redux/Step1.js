const STEP1 = "Step1/STEP1";
const initState = false;

export const StepOneMethod = (payload) => {
  return {
    type: STEP1,
    payload,
  };
};

const StepOneReducer = (state = initState, action) => {
  switch (action.type) {
    case STEP1:
      return action.payload;
    default:
      return state;
  }
};

export default StepOneReducer;
