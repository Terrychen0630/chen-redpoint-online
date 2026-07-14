import { Room } from "@/types/room";

export function startGame(room: Room): Room {
  return {
    ...room,
    status: "playing",
  };
}