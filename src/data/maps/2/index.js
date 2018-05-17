export var timer = 60;
export var tiles = [];

var mazeWidth = 35;
var mazeHeight = 19;

var moves = [];
for (var i = 0; i < mazeHeight; i++) {
  tiles[i] = [];
  for (var j = 0; j < mazeWidth; j++) {
    tiles[i][j] = 1;
  }
}
var posX = 1;
var posY = 1;
let roll;
tiles[posX][posY] = 0;
moves.push(posY + posY * mazeWidth);

for (var a = 0; a < 500; a++) {
  if (moves.length) {
    var possibleDirections = "";
    if (
      posX + 2 > 0 &&
      posX + 2 < mazeHeight - 1 &&
      tiles[posX + 2][posY] === 1
    ) {
      possibleDirections += "S";
    }
    if (
      posX - 2 > 0 &&
      posX - 2 < mazeHeight - 1 &&
      tiles[posX - 2][posY] === 1
    ) {
      possibleDirections += "N";
    }
    if (
      posY - 2 > 0 &&
      posY - 2 < mazeWidth - 1 &&
      tiles[posX][posY - 2] === 1
    ) {
      possibleDirections += "W";
    }
    if (
      posY + 2 > 0 &&
      posY + 2 < mazeWidth - 1 &&
      tiles[posX][posY + 2] === 1
    ) {
      possibleDirections += "E";
    }
    if (possibleDirections) {
      var move = Math.floor(
        Math.random() * Math.floor(possibleDirections.length)
      );
      switch (possibleDirections[move]) {
        case "N":
          tiles[posX - 2][posY] = 0;
          tiles[posX - 1][posY] = 0;
          posX -= 2;
          break;
        case "S":
          tiles[posX + 2][posY] = 0;
          tiles[posX + 1][posY] = 0;
          posX += 2;
          break;
        case "W":
          tiles[posX][posY - 2] = 0;
          tiles[posX][posY - 1] = 0;
          posY -= 2;
          break;
        case "E":
          tiles[posX][posY + 2] = 0;
          tiles[posX][posY + 1] = 0;
          posY += 2;
          break;
      }
      moves.push(posY + posX * mazeWidth);
    } else {
      var back = moves.pop();
      posX = Math.floor(back / mazeWidth);
      posY = back % mazeWidth;
    }
  }
}

function setMiddleChestLocation() {
  function setPossibleChestLocation() {
    let possibleLocation = [
      Math.floor(
        Math.random() * Math.floor(mazeHeight / 3) +
          Math.floor(mazeHeight * 2 / 5)
      ),
      Math.floor(
        Math.random() * Math.floor(mazeWidth / 3) + Math.floor(mazeWidth / 3)
      )
    ];
    setChestLocation(possibleLocation);
  }
  function setChestLocation(possibleLocation) {
    let y = possibleLocation[0];
    let x = possibleLocation[1];

    if (tiles[y][x] === 0) {
      tiles[y][x] = 2;
      return;
    } else {
      setPossibleChestLocation();
    }
  }
  setPossibleChestLocation();
}
function setBottomLeftCornerChestLocation() {
  function setPossibleChestLocation() {
    let possibleLocation = [
      Math.floor(
        Math.random() * Math.floor(mazeHeight / 6) +
          Math.floor(mazeHeight * 5 / 6)
      ),
      Math.floor(Math.random() * Math.floor(mazeWidth / 6))
    ];
    setChestLocation(possibleLocation);
  }
  function setChestLocation(possibleLocation) {
    let y = possibleLocation[0];
    let x = possibleLocation[1];

    if (tiles[y][x] === 0) {
      tiles[y][x] = 2;
      return;
    } else {
      setPossibleChestLocation();
    }
  }
  setPossibleChestLocation();
}

function setTopRightCornerChestLocation() {
  function setPossibleChestLocation() {
    let possibleLocation = [
      Math.floor(Math.random() * Math.floor(mazeHeight / 6)),
      Math.floor(
        Math.random() * Math.floor(mazeWidth / 6) +
          Math.floor(mazeWidth * 5 / 6)
      )
    ];
    setChestLocation(possibleLocation);
  }
  function setChestLocation(possibleLocation) {
    let y = possibleLocation[0];
    let x = possibleLocation[1];

    if (tiles[y][x] === 0) {
      tiles[y][x] = 2;
      return;
    } else {
      setPossibleChestLocation();
    }
  }
  setPossibleChestLocation();
}

function rollChestType() {
  roll = Math.floor(Math.random() * 3);

  if (roll === 0) {
    console.log("0");
    setMiddleChestLocation();
  }
  if (roll === 1) {
    console.log("1");
    setTopRightCornerChestLocation();
  }
  if (roll === 2) {
    console.log("2");
    setBottomLeftCornerChestLocation();
  }
}

rollChestType();
