import { Card } from "@/types/card";

interface PlayerHandProps {
  cards: Card[];
  selectedCard: Card | null;
  onSelect: (card: Card) => void;
  title: string;
}

export default function PlayerHand({
  cards,
  selectedCard,
  onSelect,
  title,
}: PlayerHandProps) {

  return (
    <div className="rounded bg-green-800 p-4">

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">

        {cards.map((card, index) => (

          <button
            key={index}
            onClick={() => onSelect(card)}
            className={`
              rounded
              px-3
              py-2
              text-black
              ${
                selectedCard === card
                  ? "bg-blue-300"
                  : "bg-white"
              }
            `}
          >
            {card.suit} {card.rank}
          </button>

        ))}

      </div>

    </div>
  );
}