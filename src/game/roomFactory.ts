import { Room } from "@/types/room";
import { Player } from "@/types/player";

export function createEmptyRoom(
  roomCode: string,
  hostName: string
): Room {

  const players: Player[] = [
    {
      id: crypto.randomUUID(),
      name: hostName,
      seat: 1,
      connected: true,
      ready: false,
      isHost: true,
      score: 0,
      hand: [],
      capturedCards: [],
    },
    {
      id: "",
      name: "",
      seat: 2,
      connected: false,
      ready: false,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },
    {
      id: "",
      name: "",
      seat: 3,
      connected: false,
      ready: false,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },
    {
      id: "",
      name: "",
      seat: 4,
      connected: false,
      ready: false,
      isHost: false,
      score: 0,
      hand: [],
      capturedCards: [],
    },
  ];

  return {
    roomCode,

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