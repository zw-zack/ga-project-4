import { timer } from "../../data/maps/2";

const initialState = {
  timer: timer
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TIMER_DOWN":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default timerReducer;
