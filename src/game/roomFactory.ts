import { Room } from "@/types/room";
import { Player } from "@/types/player";
import { Seat } from "@/game/types/seat";

export function createEmptyRoom(
  roomCode: string,
  hostName: string
): Room {

  const players: Player[] = [
    {
      id: crypto.randomUUID(),
      name: hostName,
      seat: Seat.East,

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
      seat: Seat.South,

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
      seat: Seat.West,

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
      seat: Seat.North,

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

    // 房主所在位置
    hostSeat: Seat.East,

    // 等開始遊戲時再決定頭家
    dealerSeat: Seat.East,

    // 等開始遊戲時再開始輪牌
    currentTurn: Seat.East,

    createdAt: Date.now(),

    winner: null,

    players,

    deck: [],

    seaCards: [],

    bottomCard: null,

    discardPile: [],
  };
}