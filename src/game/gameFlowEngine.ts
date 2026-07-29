import { Room } from "@/types/room";
import { isGameOver } from "./gameOverEngine";

export interface GameFlowResult {
  room: Room;
  gameOver: boolean;
}

export function continueGame(
  room: Room
): GameFlowResult {

  return {
    room,
    gameOver: isGameOver(room),
  };

}