const initialState = {
  position: [1320, 680],
  spriteLocation: "1320px 680px",
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
