import { Room } from "@/types/room";
import { Player } from "@/types/player";
import { Seat } from "@/game/types/seat";

export function createTestRoom(): Room {
  const players: Player[] = [
    {
      id: "1",
      name: "Player1",
      seat: Seat.West,
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
      seat: Seat.North,
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
      seat: Seat.East,
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
      seat: Seat.South,
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

    hostSeat: Seat.West,

    dealerSeat: Seat.West,

    currentTurn: Seat.West,

    createdAt: Date.now(),

    winner: null,

    players,

    deck: [],

    seaCards: [],

    bottomCard: null,

    discardPile: [],
  };
}