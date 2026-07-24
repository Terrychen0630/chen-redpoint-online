import { Room } from "@/types/room";
import { startGameEngine } from "./gameStartEngine";

export function startGame(room: Room): Room {
  return startGameEngine(room);
}