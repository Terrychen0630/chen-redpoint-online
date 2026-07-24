import { Room } from "@/types/room";

export function applyANineScenario(room: Room): Room {

  const updated = structuredClone(room);

  updated.players.forEach(player => {
    player.hand = [];
    player.capturedCards = [];
  });

  // Player1 手牌：♥9
  updated.players[0].hand = [
    {
      suit: "heart",
      rank: "9",
    },
  ];

  // 海底
updated.seaCards = [
  {
    suit: "club",
    rank: "A",
  },
  {
    suit: "heart",
    rank: "A",
  },
];

  updated.currentTurn = 1;

  return updated;
}