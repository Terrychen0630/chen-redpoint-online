import { Room } from "@/types/room";
import { getNextSeat } from "../utils/getNextSeat";

export function nextTurn(room: Room): Room {
  return {
    ...room,
    currentTurn: getNextSeat(room.currentTurn),
  };
}