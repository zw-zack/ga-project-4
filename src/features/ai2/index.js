import React from "react";
import { connect } from "react-redux";
import walkSprite from "./ai_walk.jpeg";
import handleMovementTwo from "./movement";
import { tiles } from "../../data/maps/2";

function AiTwo(props) {
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
    let y = 3;
    let x = 1;
    let movementArr = [];
    let backTrack;
    let turnMemory = false;
    let memoryX = [];
    let memoryY = [];
    for (let i = 0; i < 1500; i++) {
      let possibleDirections = "";

      if (tiles[y + 1][x] === 2 && backTrack !== "N") {
        possibleDirections += "S";
      }
      if (tiles[y - 1][x] === 2 && backTrack !== "S") {
        possibleDirections += "N";
      }
      if (tiles[y][x - 1] === 2 && backTrack !== "E") {
        possibleDirections += "W";
      }
      if (tiles[y][x + 1] === 2 && backTrack !== "W") {
        possibleDirections += "E";
      }
      if (tiles[y + 1][x] === 0 && backTrack !== "N") {
        possibleDirections += "S";
      }
      if (tiles[y - 1][x] === 0 && backTrack !== "S") {
        possibleDirections += "N";
      }
      if (tiles[y][x - 1] === 0 && backTrack !== "E") {
        possibleDirections += "W";
      }
      if (tiles[y][x + 1] === 0 && backTrack !== "W") {
        possibleDirections += "E";
      }

      // if (
      //   possibleDirections > 1 &&
      //   turnMemory === true &&
      //   decisionMemory.length === 0
      // ) {
      //   decisionMemory.push(placeToMove);
      //   placeToMove = possibleDirections[move];
      // }

      // if (
      //   possibleDirections > 1 &&
      //   turnMemory === true &&
      //   decisionMemory.length !== 0
      // ) {
      //   if (decisionMemory === "N") {
      //     possibleDirections.replace("S", "");
      //     decisionMemory.pop();
      //     turnMemory = false;
      //     placeToMove = possibleDirections[move];
      //   }
      //   if (decisionMemory === "S") {
      //     possibleDirections.replace("N", "");
      //     decisionMemory.pop();
      //     turnMemory = false;
      //     placeToMove = possibleDirections[move];
      //   }
      //   if (decisionMemory === "W") {
      //     possibleDirections.replace("E", "");
      //     decisionMemory.pop();
      //     turnMemory = false;
      //     placeToMove = possibleDirections[move];
      //   }
      //   if (decisionMemory === "E") {
      //     possibleDirections.replace("W", "");
      //     decisionMemory.pop();
      //     turnMemory = false;
      //     placeToMove = possibleDirections[move];
      //   }
      // }

      if (possibleDirections) {
        var move = Math.floor(
          Math.random() * Math.floor(possibleDirections.length)
        );

        let placeToMove = possibleDirections[move];
        switch (placeToMove) {
          case "N":
            movementArr.push("N");
            memoryX.push(x);
            memoryY.push(y);
            y--;
            break;
          case "S":
            movementArr.push("S");
            memoryX.push(x);
            memoryY.push(y);
            y++;
            break;
          case "W":
            movementArr.push("W");
            memoryX.push(x);
            memoryY.push(y);
            x--;
            break;
          case "E":
            movementArr.push("E");
            memoryX.push(x);
            memoryY.push(y);
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
          fireKeyboardEvent("keydown", 53);
        }
        if (movementArr[a] === "N") {
          fireKeyboardEvent("keydown", 54);
        }
        if (movementArr[a] === "E") {
          fireKeyboardEvent("keydown", 55);
        }
        if (movementArr[a] === "S") {
          fireKeyboardEvent("keydown", 56);
        }
        a++;
        if (a < 1500) {
          aiMoveLoop();
        }
      }, 300);
    }
    aiMoveLoop();
    console.log(movementArr);
  }
  var timeout;

  var prev_handler = window.onload;
  window.onload = function() {
    if (prev_handler) {
      prev_handler();
    }
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
    ...state.aiTwo
  };
}
export default connect(mapStateToProps)(handleMovementTwo(AiTwo));
