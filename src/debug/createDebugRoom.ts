import { Room } from "@/types/room";
import { Card } from "@/types/card";
import { Player } from "@/types/player";

export function createDebugRoom(type: number): Room {
  switch (type) {
    case 1:
      return createFlipDebugRoom();

    default:
      throw new Error("Unknown debug room");
  }
}

function createFlipDebugRoom(): Room {

  const players: Player[] = [
    {
      id: "1",
      name: "Player1",
      seat: 1,
      connected: true,
      ready: true,
      isHost: true,
      score: 0,

      // 玩家只有一張牌
      hand: [
        {
          suit: "club",
          rank: "2",
        } as Card,
      ],

      capturedCards: [],
    },

    {
      id: "2",
      name: "Player2",
      seat: 2,
      connected: true,
      ready: true,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },

    {
      id: "3",
      name: "Player3",
      seat: 3,
      connected: true,
      ready: true,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },

    {
      id: "4",
      name: "Player4",
      seat: 4,
      connected: true,
      ready: true,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },
  ];

  return {
    roomCode: "DEBUG",

    status: "playing",

    hostSeat: 1,

    dealerSeat: 1,

    currentTurn: 1,

    createdAt: Date.now(),

    winner: null,

    players,

    // 海底固定 ♥7
    seaCards: [
      {
        suit: "heart",
        rank: "7",
      } as Card,
    ],

    // 第一張固定 ♦3
    deck: [
      {
        suit: "diamond",
        rank: "3",
      } as Card,
    ],

    bottomCard: null,

    discardPile: [],
  };
}