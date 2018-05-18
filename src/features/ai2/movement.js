import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
export default function handleMovementTwo(aiTwo) {
  function getNewPosition(oldPos, direction) {
    switch (direction) {
      case "WEST":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "EAST":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "NORTH":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "SOUTH":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
      default:
        return;
    }
  }

  function getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case "SOUTH":
        return `${30 * walkIndex}px ${SPRITE_SIZE * 0}px`;
      case "WEST":
        return `${30 * walkIndex}px ${SPRITE_SIZE * 1}px`;
      case "EAST":
        return `${30 * walkIndex}px ${SPRITE_SIZE * 2}px`;
      case "NORTH":
        return `${30 * walkIndex}px ${SPRITE_SIZE * 3}px`;
      default:
        return;
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().aiTwo.walkIndex;
    return walkIndex >= 2 ? 0 : walkIndex + 1;
  }

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    );
  }

  function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile === 0 || nextTile === 2;
  }

  function chestCollected(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return nextTile === 2;
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex();
    store.dispatch({
      type: "MOVE_AI_TWO",
      payload: {
        position: newPos,
        direction: direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex)
      }
    });
  }

  function attemptMove(direction) {
    const oldPos = store.getState().aiTwo.position;
    const newPos = getNewPosition(oldPos, direction);

    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
      dispatchMove(direction, newPos);

    if (chestCollected(oldPos, newPos)) alert("Ai Two Won!");
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 53:
        return attemptMove("WEST");

      case 54:
        return attemptMove("NORTH");

      case 55:
        return attemptMove("EAST");

      case 56:
        return attemptMove("SOUTH");

      default:
      // console.log(e.keyCode);
    }
  }
  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });
  return aiTwo;
}
