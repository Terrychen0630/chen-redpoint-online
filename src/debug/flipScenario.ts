
import { Room } from "@/types/room"; 

export function applyFlipScenario(room: Room): Room {
  console.log("🟦 Chain Scenario");

  const updated = structuredClone(room);

  updated.players.forEach((player) => {
    player.hand = [];
    player.capturedCards = [];
  });

  // Player1 手上
  updated.players[0].hand = [
    {
      suit: "club",
      rank: "2",
    },
  ];

  // 海底
  updated.seaCards = [
    {
      suit: "heart",
      rank: "8",   // 先吃這張
    },
    {
      suit: "spade",
      rank: "7",   // 等翻牌後吃
    },
  ];

  // 第一張翻牌
  updated.deck = [
    {
      suit: "diamond",
      rank: "3",   // 3 可以配 7
    },
  ];

  updated.currentTurn = 1;

  return updated;
}