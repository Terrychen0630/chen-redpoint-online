import { Room } from "@/types/room";
import { Card } from "@/types/card";

export function captureCards(
  room: Room,
  playerSeat: number,
  handCard: Card,
  seaCard: Card
): Room {
  const players = room.players.map((player) => {
    if (player.seat !== playerSeat) {
      return player;
    }

    return {
      ...player,

      hand: player.hand.filter(
        (card) =>
          !(
            card.suit === handCard.suit &&
            card.rank === handCard.rank
          )
      ),

      capturedCards: [
        ...player.capturedCards,
        handCard,
        seaCard,
      ],
    };
  });

  const seaCards = room.seaCards.filter(
    (card) =>
      !(
        card.suit === seaCard.suit &&
        card.rank === seaCard.rank
      )
  );

  return {
    ...room,
    players,
    seaCards,
  };
}