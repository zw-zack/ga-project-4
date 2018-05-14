import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";

import "./style.css";
var timerInterval;
// let timer = 5;

// var timerInterval = setInterval(timerDown, 1000);

// function timerDown() {
//   console.log(timer);
//   timer = timer - 1;
// }

// function displayTimer(props) {
//   return props;
// }
function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 3:
      return "tree";
    case 4:
      return "chest";
    case 5:
      return "rock";
    case 6:
      return "tree";

    default:
      return;
  }
}
function MapTile(props) {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    />
  );
}

function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map(tile => <MapTile tile={tile} />)}
    </div>
  );
}

function timerDown(time) {
  if (time > 0) {
    time = time - 1;
  }
  console.log(time);
}

function Map(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "1400px",
        height: "760px"
        // border: "4px solid white"
      }}
    >
      {props.tiles.map(row => <MapRow tiles={row} />)}
      <div
        className="timer"
        style={{
          position: "absolute",
          top: "0px",
          left: "1300px"
        }}
      >
        Timer: {props.timer}
        {/* {
          (timerInterval = setInterval(function() {
            timerDown(props.timer);
          }, 1000))
        } */}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles,
    timer: state.map.timer
  };
}

export default connect(mapStateToProps)(Map);
