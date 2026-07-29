import { Card } from "@/types/card";

export interface PlayData {
  mustContinue: boolean;
  flippedCard?: Card;
  chainCards: Card[];
}