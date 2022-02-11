const CONTENT = "content/CONTENT";
const initState = [];

export const GetAllContent = (payload) => {
  return {
    type: CONTENT,
    payload,
  };
};

const ContentReducer = (state = initState, action) => {
  switch (action.type) {
    case CONTENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ContentReducer;
