import { Card } from "@/types/card";
import { Player } from "@/types/player";

export function hasCardInHand(
    player: Player,
    card: Card
){

    return player.hand.some(
        handCard=>

            handCard.rank===card.rank &&
            handCard.suit===card.suit

    );

}