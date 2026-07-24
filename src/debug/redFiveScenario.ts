import { Room } from "@/types/room";

export function applyRedFiveScenario(room: Room): Room {

  const updated = structuredClone(room);

  updated.players[0].capturedCards = [
    {
      suit: "heart",
      rank: "5",
    },
    {
      suit: "diamond",
      rank: "5",
    },
  ];

  return updated;
}