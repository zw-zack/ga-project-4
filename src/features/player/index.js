import React from "react";
import { connect } from "react-redux";
import walkSprite from "./player_walk.png";
import fog2 from "./fog2.png";
import handleMovement from "./movement";
import Timer from "../timer";

function Player(props) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: props.position[1],
          left: props.position[0],
          backgroundImage: `url('${walkSprite}')`,
          backgroundPosition: props.spriteLocation,
          width: "40px",
          height: "40px"
        }}
      >
        <Timer />
      </div>
      <div
        className="vision"
        style={{
          position: "absolute",
          top: props.position[1] - 1650,
          left: props.position[0] - 1755,
          backgroundImage: `url('${fog2}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "3500px",
          height: "3500px"
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}
export default connect(mapStateToProps)(handleMovement(Player));
