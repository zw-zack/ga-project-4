import React from "react";
import { connect } from "react-redux";
import walkSprite from "./player_walk.png";
import fog from "./fog.png";
import handleMovement from "./movement";

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
      />
      {/* <div
        className="vision"
        style={{
          position: "absolute",
          top: props.position[1] - 850,
          left: props.position[0] - 1740,
          backgroundImage: `url('${fog}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "3500px",
          height: "3500px"
        }}
      /> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}
export default connect(mapStateToProps)(handleMovement(Player));
