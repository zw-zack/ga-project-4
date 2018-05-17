const initialState = {
  position: [1400, 760],
  spriteLocation: "1400px 760px",
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
