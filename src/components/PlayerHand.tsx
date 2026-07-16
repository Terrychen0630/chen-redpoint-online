import { Card } from "@/types/card";

interface PlayerHandProps {
  title: string;
  cards: Card[];
  capturedCards: Card[];
  selectedCard: Card | null;
  onSelect: (card: Card) => void;
}

export default function PlayerHand({
  title,
  cards,
  capturedCards,
  selectedCard,
  onSelect,
}: PlayerHandProps) {
  return (
    <div className="rounded bg-green-800 p-4">

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="mb-2 font-bold">
        手牌
      </p>

      <div className="mb-4 flex flex-wrap gap-2">

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

      <hr className="my-4" />

      <p className="mb-2 font-bold">
        吃牌
      </p>

      <div className="flex flex-wrap gap-2">

        {capturedCards.map((card, index) => (

          <div
            key={index}
            className="rounded bg-red-600 px-3 py-2"
          >
            {card.suit} {card.rank}
          </div>

        ))}

      </div>

    </div>
  );
}