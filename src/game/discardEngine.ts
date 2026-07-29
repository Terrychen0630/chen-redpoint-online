import { Room } from "@/types/room";
import { Card } from "@/types/card";
import { Seat } from "@/game/types/seat";

export function discardCard(
  room: Room,
  playerSeat: Seat,
  card: Card
): Room {

  const players = room.players.map((player) => {

    if (player.seat !== playerSeat) {
      return player;
    }

    return {
      ...player,
      hand: player.hand.filter((c) => c.id !== card.id),
    };

  });

  return {
    ...room,
    players,
    seaCards: [...room.seaCards, card],
  };
}