const initialState = {
  position: [40, 120],
  spriteLocation: "40px 120px",
  direction: "north",
  walkIndex: 0
};

const aiTwoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_AI_TWO":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default aiTwoReducer;
