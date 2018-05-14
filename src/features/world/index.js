import React from "react";
import Map from "../map";
import Player from "../player";
import { tiles1, timer1 } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: tiles1,
      timer: timer1
    }
  });
  return (
    <div
      style={{
        position: "relative",
        width: "1400px",
        height: "760px",
        margin: "20px auto"
      }}
    >
      <Map />
      <Player />
    </div>
  );
}

export default World;
