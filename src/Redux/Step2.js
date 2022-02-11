const STEP2 = "Step2/STEP2";
const initState = false;

export const StepTwoMethod = (payload) => {
  return {
    type: STEP2,
    payload,
  };
};

const StepTwoReducer = (state = initState, action) => {
  switch (action.type) {
    case STEP2:
      return action.payload;
    default:
      return state;
  }
};

export default StepTwoReducer;
