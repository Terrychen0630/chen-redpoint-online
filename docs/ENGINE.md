# Chen Red Point Engine API

## Match Engine

findSelectableMatches(
    handCard,
    seaCards
)

回傳：

HighlightCard[]

---------------------------------

## Capture Engine

captureCards(
    room,
    playerSeat,
    sourceCard,
    seaCard,
    options
)

回傳：

Room

---------------------------------

## Flip Engine

flipCard(room)

回傳：

FlipResult

---------------------------------

## Play Turn

playTurn(...)

流程：

Play

↓

Capture

↓

Flip

↓

Chain

↓

Return

---------------------------------

## Chain Capture

confirmChainCapture(...)

流程：

Capture

↓

NextTurn