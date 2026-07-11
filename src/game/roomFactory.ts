import { Room } from "@/types/room";

export function createEmptyRoom(
  roomCode: string,
  hostName: string
): Room {
  return {
    roomCode,

    status: "waiting",

    hostSeat: 1,

    dealerSeat: 1,

    currentTurn: 1,

    createdAt: Date.now(),

    winner: null,

    players: {
      seat1: {
        id: crypto.randomUUID(),
        name: hostName,
        connected: true,
        ready: false,
        isHost: true,
        score: 0,
        hand: [],
        matchedCards: [],
      },

      seat2: {
        id: "",
        name: "",
        connected: false,
        ready: false,
        isHost: false,
        score: 0,
        hand: [],
        matchedCards: [],
      },

      seat3: {
        id: "",
        name: "",
        connected: false,
        ready: false,
        isHost: false,
        score: 0,
        hand: [],
        matchedCards: [],
      },

      seat4: {
        id: "",
        name: "",
        connected: false,
        ready: false,
        isHost: false,
        score: 0,
        hand: [],
        matchedCards: [],
      },
    },

    deck: [],

    seaCards: [],

    bottomCard: null,

    discardPile: [],
  };
}