import React from "react";
import Map from "../map";
import Player from "../player";
import Timer from "../timer";
import { tiles } from "../../data/maps/2";
import store from "../../config/store";

function World(props) {
  store.dispatch({
    type: "ADD_TILES",
    payload: {
      tiles: tiles
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
      <Timer />
    </div>
  );
}

export default World;
