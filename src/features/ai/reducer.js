const initialState = {
  position: [1320, 1320],
  spriteLocation: "1320px 1320px",
  direction: "north",
  walkIndex: 0
};

const aiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_AI":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default aiReducer;
