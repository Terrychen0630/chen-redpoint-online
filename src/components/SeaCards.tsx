import { Card } from "@/types/card";
import { HighlightCard } from "@/game/highlightEngine";

interface SeaCardsProps {
  seaCards: Card[];
  selectableCards: HighlightCard[];
  selectedCard?: Card | null;
  onSelect: (card: Card) => void;
}

export default function SeaCards({
  seaCards,
  selectableCards,
  selectedCard,
  onSelect,
}: SeaCardsProps) {

  return (

    <div>

      <h2 className="mb-4 text-2xl font-bold">
        海底
      </h2>

      <div className="flex flex-wrap gap-3">

        {seaCards.map((card) => {

          const selectable =
            selectableCards.some(
              (item) => item.card.id === card.id
            );

          const selected =
            selectedCard?.id === card.id;

          return (

            <button
              key={card.id}
              onClick={() => onSelect(card)}
              className={`
                rounded-lg
                border-2
                px-3
                py-2
                transition-all
                duration-200

                ${
                  selected
                    ? "border-blue-500 bg-blue-200 scale-105"
                    : selectable
                      ? "border-green-500 bg-green-200"
                      : "border-gray-300 bg-yellow-100"
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