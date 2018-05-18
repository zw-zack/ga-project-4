import { createStore, combineReducers } from "redux";
import playerReducer from "../features/player/reducer";
import mapReducer from "../features/map/reducer";
import timerReducer from "../features/timer/reducer";
import aiReducer from "../features/ai/reducer";
import aiTwoReducer from "../features/ai2/reducer";

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  timer: timerReducer,
  ai: aiReducer,
  aiTwo: aiTwoReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
