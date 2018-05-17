const initialState = {
  position: [40, 40],
  spriteLocation: "40px 40px",
  direction: "south",
  walkIndex: 0
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
