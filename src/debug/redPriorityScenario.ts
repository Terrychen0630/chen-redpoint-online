import { Room } from "@/types/room";

export function applyRedPriorityScenario(room: Room): Room {
  const updated = structuredClone(room);

  updated.players.forEach(player => {
    player.hand = [];
    player.capturedCards = [];
  });

  updated.players[0].hand = [
    {
      suit: "diamond",
      rank: "4",
    },
  ];

  updated.seaCards = [
    {
      suit: "heart",
      rank: "6",
    },
    {
      suit: "club",
      rank: "6",
    },
  ];

  updated.currentTurn = 1;

  return updated;
}