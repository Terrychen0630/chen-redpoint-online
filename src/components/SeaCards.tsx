import { Card } from "@/types/card";
import { HighlightCard } from "@/game/highlightEngine";

interface SeaCardsProps {
  seaCards: Card[];
  selectableCards: HighlightCard[];
  onSelect: (card: Card) => void;
}

export default function SeaCards({
  seaCards,
  selectableCards,
  onSelect,
}: SeaCardsProps) {
  return (
    <div>

      <h2 className="mb-4 text-2xl">
        海底
      </h2>

      <div className="flex gap-3">

        {seaCards.map((card, index) => {

          const selectable = selectableCards.find(
            (item) =>
              item.card.rank === card.rank &&
              item.card.suit === card.suit
          );

          return (

            <button
              key={index}
              onClick={() => onSelect(card)}
              className={`
                rounded
                px-3
                py-2
                text-black
                ${
                  selectable
                    ? "bg-red-400"
                    : "bg-yellow-300"
                }
              `}
            >
              {card.suit} {card.rank}
            </button>

          );

        })}

      </div>

    </div>
  );
}