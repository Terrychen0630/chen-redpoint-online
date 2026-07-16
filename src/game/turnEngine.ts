import { Room } from "@/types/room";

export function nextTurn(
  room: Room
): Room {

  let nextSeat = room.currentTurn + 1;

  if (nextSeat > 4) {
    nextSeat = 1;
  }

  return {
    ...room,
    currentTurn: nextSeat,
  };

}