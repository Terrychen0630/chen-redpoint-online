import { Room } from "@/types/room";
import { Player } from "@/types/player";

export function createTestRoom(): Room {

  const players: Player[] = [
    {
      id: "1",
      name: "Player1",
      seat: 1,
      connected: true,
      ready: true,
      isHost: true,
      score: 0,
      hand: [],
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
    roomCode: "TEST01",

    status: "waiting",

    hostSeat: 1,

    dealerSeat: 1,

    currentTurn: 1,

    createdAt: Date.now(),

    winner: null,

    players,

    deck: [],

    seaCards: [],

    bottomCard: null,

    discardPile: [],
  };
}