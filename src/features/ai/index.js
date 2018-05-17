import React from "react";
import { connect } from "react-redux";
import walkSprite from "./ai_walk.jpeg";
import fog from "./fog.png";
import handleMovement from "./movement";
import { tiles } from "../../data/maps/2";

function Ai(props) {
  function testMove() {
    function fireKeyboardEvent(event, keycode) {
      var keyboardEvent = document.createEventObject
        ? document.createEventObject()
        : document.createEvent("Events");

      if (keyboardEvent.initEvent) {
        keyboardEvent.initEvent(event, true, true);
      }

      keyboardEvent.keyCode = keycode;
      keyboardEvent.which = keycode;

      document.dispatchEvent
        ? document.dispatchEvent(keyboardEvent)
        : document.fireEvent(event, keyboardEvent);
    }
    let y = 17;
    let x = 33;
    let movementArr = [];
    let movesInterval;
    let backTrack;
    for (let i = 0; i < 500; i++) {
      let currentPosition = tiles[y][x];
      let possibleDirections = "";

      if (tiles[y + 1][x] === 0 && backTrack != "N") {
        possibleDirections += "S";
      }
      if (tiles[y - 1][x] === 0 && backTrack != "S") {
        possibleDirections += "N";
      }
      if (tiles[y][x - 1] === 0 && backTrack != "E") {
        possibleDirections += "W";
      }
      if (tiles[y][x + 1] === 0 && backTrack != "W") {
        possibleDirections += "E";
      }
      if (tiles[y + 1][x] === 2 && backTrack != "N") {
        possibleDirections += "S";
      }
      if (tiles[y - 1][x] === 2 && backTrack != "S") {
        possibleDirections += "N";
      }
      if (tiles[y][x - 1] === 2 && backTrack != "E") {
        possibleDirections += "W";
      }
      if (tiles[y][x + 1] === 2 && backTrack != "W") {
        possibleDirections += "E";
      }

      if (possibleDirections) {
        var move = Math.floor(
          Math.random() * Math.floor(possibleDirections.length)
        );
        let placeToMove = possibleDirections[move];

        switch (placeToMove) {
          case "N":
            movementArr.push("N");
            y--;
            break;
          case "S":
            movementArr.push("S");
            y++;
            break;
          case "W":
            movementArr.push("W");
            x--;
            break;
          case "E":
            movementArr.push("E");
            x++;
            break;
        }
        backTrack = placeToMove;
      } else {
        backTrack = "";
      }
    }
    var a = 0;
    function aiMoveLoop() {
      setTimeout(function() {
        if (movementArr[a] === "W") {
          fireKeyboardEvent("keydown", 49);
        }
        if (movementArr[a] === "N") {
          fireKeyboardEvent("keydown", 50);
        }
        if (movementArr[a] === "E") {
          fireKeyboardEvent("keydown", 51);
        }
        if (movementArr[a] === "S") {
          fireKeyboardEvent("keydown", 52);
        }
        a++;
        if (a < 500) {
          aiMoveLoop();
        }
      }, 100);
    }
    aiMoveLoop();
  }

  var timeout;
  window.onload = function() {
    timeout = setTimeout(testMove, 1000);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: props.position[1],
          left: props.position[0],
          backgroundImage: `url('${walkSprite}')`,
          backgroundPosition: props.spriteLocation,
          width: "30px",
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
    ...state.ai
  };
}
export default connect(mapStateToProps)(handleMovement(Ai));
