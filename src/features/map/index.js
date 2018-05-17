import React from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";

import "./style.css";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "tree";
    case 2:
      return "chest";
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

function Map(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "0px",
        width: "1400px",
        height: "760px"
      }}
    >
      {props.tiles.map(row => <MapRow tiles={row} />)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}

export default connect(mapStateToProps)(Map);
