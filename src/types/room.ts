import { Player } from "./player";
import { Card } from "./card";
import { Seat } from "@/game/types/seat";

export interface Room {
  roomCode: string;

  status: "waiting" | "playing" | "finished";

  /** 房主所在座位 */
  hostSeat: Seat;

  /** 本局頭家 */
  dealerSeat: Seat;

  /** 目前輪到誰 */
  currentTurn: Seat;

  createdAt: number;

  /** 贏家（尚未結束為 null） */
  winner: Seat | null;

  players: Player[];

  /** 剩餘牌堆 */
  deck: Card[];

  /** 海底牌 */
  seaCards: Card[];

  /** 最後翻出的底牌 */
  bottomCard: Card | null;

  /** 棄牌堆 */
  discardPile: Card[];
}